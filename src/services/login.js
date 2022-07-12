import { URL_API } from '../utils/config';

/**
 * Login service
 *
 * @description It takes the email and password from the form, creates a user object, and sends it to the server.
 * @async
 * @returns {json} The response from the server.
 */
const login = async () => {
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

  return fetch(`${URL_API}/user/login`, options).then((response) => {
    return response.json();
  });
};

export default login;
