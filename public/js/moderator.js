const approve = document.querySelectorAll(".approve");
const reject = document.querySelectorAll(".reject");

async function rejectOrApproveArticle(status, id) {
  const res = await fetch(`/moderator/articles/status/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      status,
    }),
  });

  const data = await res.json();

  return data;
}

//TODO: handle errors
async function addButtonEvents(buttons, status) {
  buttons.forEach((approveBtn) => {
    approveBtn.addEventListener("click", async (event) => {
      const data = await rejectOrApproveArticle(status, approveBtn.value);

      if (data.success) {
        const row = document.getElementById(approveBtn.value);
        row.remove();
      }
    });
  });
}
addButtonEvents(approve, "approved");
addButtonEvents(reject, "rejected");

const remove = document.querySelectorAll(".remove");
remove.forEach((removeBtn) => {
  removeBtn.addEventListener("click", async (event) => {
    const res = await fetch(`/moderator/articles/delete/${removeBtn.value}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    if (data.success) {
      const row = document.getElementById(removeBtn.value);
      row.remove();
    }
  });
});
