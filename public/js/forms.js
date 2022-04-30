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

async function submitForm(data, requestUrl, redirectUrl) {
  const res = await fetch(requestUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    redirect: "follow",
  });
  const resData = await res.json();
  if (resData.success === true) {
    window.location.replace(redirectUrl);
  } else {
    showErrors(resData.errors);
  }
}

function resetErrors(formData) {
  for (const f of formData.entries()) {
    document.getElementById(f[0]).innerHTML = "";
  }
}

const form =
  document.getElementById("loginForm") ||
  document.getElementById("registerForm");

const formInfo = {
  loginForm: {
    requestUrl: "/users/login",
    redirectUrl: "/",
  },
  registerForm: {
    requestUrl: "/users/register",
    redirectUrl: "/login",
  },
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const requestInfo = formInfo[form.id];
  const formData = new FormData(form);
  resetErrors(formData);
  const data = formDataToJson(formData);
  await submitForm(data, requestInfo.requestUrl, requestInfo.redirectUrl);
});
