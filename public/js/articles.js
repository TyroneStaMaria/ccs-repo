document.addEventListener("DOMContentLoaded", (event) => {
  const yearCheckboxes = document.querySelectorAll("input[type=checkbox]");
  const searchInput = document.getElementById("searchQuery");
  const urlParams = new URLSearchParams(window.location.search);
  // // console.log(urlParams.);

  urlParams.forEach((param) => {
    yearCheckboxes.forEach((item) => {
      if (param === item.value) {
        item.checked = true;
      }
    });
  });

  yearCheckboxes.forEach((item) => {
    item.addEventListener("change", (event) => {
      const form = document.getElementById("searchForm");
      form.submit();
    });
  });

  searchInput.value = urlParams.get("q");
});
