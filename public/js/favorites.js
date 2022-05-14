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
