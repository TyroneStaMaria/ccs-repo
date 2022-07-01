const hidden = document.getElementById("page");
const pages = document.querySelectorAll(".pagination__btn");
pages[0].classList.add("pagination__btn--active");
let prevValue = hidden.value;
async function search({ q, page }) {
  const res = await fetch(
    `/moderator/articles/get?${new URLSearchParams({ q, page })}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();

  return data;
}

function handlePagination(elem) {
  hidden.value = elem.value;
}

function formDataToJson(formData) {
  const data = {};
  formData.forEach((value, key) => {
    const sanitizedKey = key.replace("[]", "");
    data[sanitizedKey] = key.includes("[]") ? formData.getAll(key) : value;
  });

  return data;
}

function renderTable({ articles, success }) {
  if (success) {
    const articleList = document.getElementById("articleList");
    articleList.innerHTML = "";
    if (articles.length == 0) {
      articleList.innerHTML = `<tr><td>No articles found...</td></tr>`;
      return;
    }
    articles.forEach((article) => {
      const template = `
      <tr id="${article._id}" data-title="${article.title}">
        <td class="article-title">
          <a href="/moderator/article/${article._id}">
            ${article.title}
          </a>
        </td>
        <td class="delete-article">
          <button class="text-red reject" value="${this._id}">
            <span class="material-symbols-outlined">
              cancel
            </span>
          </button>
        </td>
        <td class="delete-article">
          <button class="text-primary approve" value="${this._id}">
            <span class="material-symbols-outlined">
              check_circle
            </span>
          </button>
        </td>
      </tr>`;
      articleList.insertAdjacentHTML("beforeend", template);
    });
  }
}

function renderPagination({ totalPages, success }) {
  const pagination = document.querySelector(".pagination");

  pagination.innerHTML = "";
  if (success) {
    for (let i = 1; i <= totalPages; i++) {
      const template = ` 
      <button
        class="pagination__btn"
        value="${i}"
        onclick="handlePagination(this);"
      >
        ${i}
      </button>`;
      pagination.insertAdjacentHTML("beforeend", template);
    }
    const pages = document.querySelectorAll(".pagination__btn");
    pages.forEach((page) => {
      page.addEventListener("click", submitSearch);
    });
    pages[prevValue - 1].classList.remove("pagination__btn--active");
    pages[hidden.value - 1].classList.add("pagination__btn--active");
  }
}

async function submitSearch(event) {
  event.preventDefault();
  const formData = new FormData(searchForm);
  const data = formDataToJson(formData);
  const results = await search(data);
  renderTable({ ...results });
  renderPagination({ ...results });
  console.log(results);
}

const searchForm = document.getElementById("searchForm");
pages.forEach((page) => {
  page.addEventListener("click", submitSearch);
});
searchForm.addEventListener("submit", submitSearch);
