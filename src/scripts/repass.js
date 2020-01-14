'use strict'

export function resetPass() {
document.getElementById('warning').style.display = 'none';

let user = {
  email: document.getElementById('email').value,
}

document.getElementById('submit').onclick = function() {
  if (user.email == "") {
    document.getElementById('warning').style.display = 'block';
  }
  else {
    repass()
  }
  }
}

async function repass() {
  const data = {
    email: user.email
  };
  let options = {
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  let response = await fetch("http://localhost:3000/api/users/reset_password/", options);
  let result = await response.json();
  console.log(result);  
}