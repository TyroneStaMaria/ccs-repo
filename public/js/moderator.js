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
