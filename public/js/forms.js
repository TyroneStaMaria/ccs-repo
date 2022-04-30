function showErrors(errors) {
  errors.forEach((error) => {
    const errorMsg = document.getElementById(error.param);
    errorMsg.innerHTML = `<small>${error.msg}</small>`;
  });
}

function formDataToJson(formData) {
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  return data;
}

async function submitForm(data, redirectLink) {
  const res = await fetch("/users/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    redirect: "follow",
  });
  const resData = await res.json();
  console.log(resData);
  if (resData.success === true) {
    window.location.replace(redirectLink);
  } else {
    showErrors(resData.errors);
  }
}

function resetErrors(formData) {
  for (const f of formData.entries()) {
    document.getElementById(f[0]).innerHTML = "";
  }
}

const loginForm = document.getElementById("loginForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  resetErrors(formData);
  const data = formDataToJson(formData);
  await submitForm(data, "/");
});
