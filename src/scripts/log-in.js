'use strict'

export function logIn() {
  document.getElementById('warning').style.display = 'none';

  let values = {
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  }

  document.getElementById('submit').onclick = function () {
    if (values.email == "" && values.password == "") {
      document.getElementById('warning').style.display = 'block';
    }
    else {
      login()
    }
  }
}

async function login() {
  const data = {
    email: values.email,
    password: values.password
  };
  let options = {
    mode: 'cors',
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  let response = await fetch("http://localhost:3000/api/users/login", options);
  let result = await response.json();
  console.log(result);
}