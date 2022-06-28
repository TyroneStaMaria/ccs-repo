const template = `
  <div class="author__details flex" >
    <div>
      <label for="authors[]">Author Name</label>
      <br>
      <input type="text" name="authors[]" class="form__input">
    </div>
    <button type="button" class="remove-author" onclick="removeAuthor(this)" >
      <span class="material-symbols-outlined">
        delete
      </span>
    </button>
  </div>
`;

const addButton = document.getElementById("addAuthor");
const removeButtons = document.querySelectorAll(".remove-author");
const authorList = document.getElementById("authorList");

addButton.addEventListener("click", (event) => {
  authorList.insertAdjacentHTML("beforeend", template);
});

function removeAuthor(el) {
  const parent = el.parentNode;
  authorList.removeChild(parent);
}
