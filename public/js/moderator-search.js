const hidden = document.getElementById("page");
const pages = document.querySelectorAll(".pagination__btn");
pages[0].classList.add("pagination__btn--active");
let prevValue = hidden.value;
async function search(query) {
  const res = await fetch(
    `/moderator/articles/search?${new URLSearchParams({ ...query })}`,
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
  prevValue = hidden.value;
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

function tableTemplates(article, status) {
  const templates = {
    pending: `
    <tr id="${article._id}" data-title="${article.title}">
      <td class="article-title">
        <a href="/moderator/article/${article._id}">
          ${article.title}
        </a>
      </td>
      <td class="delete-article">
        <button class="text-red reject" value="${article._id}">
          <span class="material-symbols-outlined">
            cancel
          </span>
        </button>
      </td>
      <td class="delete-article">
        <button class="text-primary approve" value="${article._id}">
          <span class="material-symbols-outlined">
            check_circle
          </span>
        </button>
      </td>
    </tr>`,
    approved: `
    <tr id="${article._id}" data-title="${article.title}">
      <td class="article-title">
        <a href="/moderator/article/${article._id}">
          ${article.title}
        </a>
      </td>
      <td class="delete-article">
        <button class="text-red remove" value="${article._id}">
          <span class="material-symbols-outlined">
            delete
          </span>
        </button>
      </td>
      <td class="feature-article">
        <button class="button button--outline featured" value="${
          article._id
        }" data-featured="${article.featured ? "featured" : ""}">
          ${article.featured ? "Remove from Featured" : "Add to Featured"} 
        </button>
      </td>
    </tr>`,
  };

  return templates[status];
}

async function renderTable(event, status, { articles, totalPages, success }) {
  if (success) {
    const articleList = document.getElementById("articleList");
    articleList.innerHTML = "";
    if (totalPages < parseInt(hidden.value)) {
      hidden.value = 1;
      await submitSearch(event);
      return;
    }
    if (articles.length == 0) {
      articleList.innerHTML = `<tr><td>No articles found...</td></tr>`;
      return;
    }

    articles.forEach((article) => {
      const template = tableTemplates(article, status);
      articleList.insertAdjacentHTML("beforeend", template);
    });
    addEvents();
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
    pages[prevValue - 1]?.classList.remove("pagination__btn--active");
    pages[hidden.value - 1]?.classList.add("pagination__btn--active");
  }
}

async function submitSearch(event) {
  event.preventDefault();
  const formData = new FormData(searchForm);
  const data = formDataToJson(formData);
  showOverlay();
  const results = await search(data);
  renderTable(event, data.status, { ...results });
  renderPagination({ ...results });
  hideOverlay();
}

const searchForm = document.getElementById("searchForm");
pages.forEach((page) => {
  page.addEventListener("click", submitSearch);
});
searchForm.addEventListener("submit", submitSearch);
