document.addEventListener("DOMContentLoaded", (event) => {
  const yearCheckboxes = document.querySelectorAll("input[type=checkbox]");
  const searchInput = document.getElementById("searchQuery");
  const urlParams = new URLSearchParams(window.location.search);
  const pages = document.querySelectorAll(".pagination__btn");
  const form = document.getElementById("searchForm");
  const currPage = urlParams.get("page") || 1;
  const overlay = document.querySelector(".overlay");

  pages[currPage - 1].classList.add("pagination__btn--active");

  pages.forEach((item) => {
    item.addEventListener("click", (event) => {
      overlay.style.display = "block";
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
      overlay.style.display = "block";
      form.submit();
    });
  });

  searchInput.value = urlParams.get("q");

  // const favButton = document.getElementById("toggleFavorites");
});
