'use strict'

const url = 'https://geekhub-frontend-js-9.herokuapp.com/api/users/';

document.getElementById('warning').style.display = 'none';

document.getElementById('submit').onclick = function () {

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let name = document.getElementById('name').value;

    let user = {
      email: email,
      password: password,
      name: name
      }
      fetch(url, {
        method: 'POST', 
        mode: 'cors',  
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user), 
    })
    .then(response => {
      if (response.ok) {
        document.getElementById('warning').style.display = 'none';
        response.json()
      } else {
        document.getElementById('warning').style.display = 'inline';
      }
    })
}