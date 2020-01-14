'use strict'

export function signUp() {
document.getElementById('warning').style.display = 'none';

let user = {
  email: document.getElementById('email').value,
  password: document.getElementById('password').value,
  confirm: document.getElementById('confirm').value
}

document.getElementById('submit').onclick = function() {
  if (user.email == "" && user.password == "" && user.confirm == "") {
    document.getElementById('warning').style.display = 'block';
  }
  else if (user.password != user.confirm) {
    document.getElementById('warning').style.display = 'block';
  }
  else {
    sign()
  }
}
}

async function sign() {
  const data = {
    password: user.pass,
    email: user.email,
    confirm: user.confirm
  };
  
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  let response = await fetch('http://localhost:3000/api/users/', options);
  const json = await response.json();
  console.log(json)
}
