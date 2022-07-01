import { URL_API } from '../utils/config';

const login = () => {
  const email = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const user = {
    email: email,
    password: password,
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  fetch(`${URL_API}/user/login`, options)
    .then((response) => response.json())
    .then((data) => console.log(data.body.token));
};

export default login;
