document.addEventListener("DOMContentLoaded", (event) => {
  const yearCheckboxes = document.querySelectorAll("input[type=checkbox]");
  const searchInput = document.getElementById("searchQuery");
  const urlParams = new URLSearchParams(window.location.search);
  const pages = document.querySelectorAll(".pagination__btn");
  const form = document.getElementById("searchForm");
  const currPage = urlParams.get("page") || 1;

  pages[currPage - 1].classList.add("pagination__btn--active");

  pages.forEach((item) => {
    item.addEventListener("click", (event) => {
      form.submit();
    });
  });

  urlParams.forEach((param) => {
    yearCheckboxes.forEach((item) => {
      if (param === item.value) {
        item.checked = true;
      }
    });
  });

  yearCheckboxes.forEach((item) => {
    item.addEventListener("change", (event) => {
      form.submit();
    });
  });

  searchInput.value = urlParams.get("q");

  // const favButton = document.getElementById("toggleFavorites");

  const favButtons = document.querySelectorAll(".favorite-button");

  favButtons.forEach((button) => {
    button.addEventListener("click", async (event) => {
      const articleId = button.value;
      console.log(articleId);
      const res = await fetch("/users/favorites", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        body: JSON.stringify({ articleId: articleId }),
      });
      const data = await res.json();
      if (data.success) {
        button.innerHTML =
          data.method === "add"
            ? `
          <span class="material-symbols-outlined">
            star
          </span>
          Remove from Favorites 
        `
            : `
          <span class="material-symbols-outlined">
            grade
          </span>
          Add to Favorites
        `;
      }
    });
  });
});
