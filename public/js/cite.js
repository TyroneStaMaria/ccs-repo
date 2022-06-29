const Cite = require("citation-js");

const info = document.getElementById("citationInfo").textContent;

Cite.async(info).then((result) => {
  const citation = result.format("bibliography", {
    format: "text",
    template: "apa",
  });
  const copyCitation = document.getElementById("citation");
  const copyBtn = document.getElementById("copyBtn");
  document.getElementById("modal-message").innerHTML = citation;
  copyCitation.value = citation;
  copyBtn.style.display = "flex";
});

function copyCitation() {
  const copyText = document.getElementById("citation");
  const copyBtn = document.getElementById("copyBtn");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
  copyBtn.innerHTML = "Copied to Clipboard!";

  setTimeout(() => {
    const template = `
      <span class="material-symbols-outlined">
        content_copy
      </span>
      Copy Citation
  `;
    copyBtn.innerHTML = template;
  }, 500);
}
