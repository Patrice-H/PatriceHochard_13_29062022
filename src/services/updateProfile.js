import { URL_API } from '../utils/config';

/**
 * Update profile service
 *
 * @description It takes a token, firstName, and lastName as arguments, and returns a fetch request to the server
 * with the token and user data in the body of the request.
 * @async
 * @param {string} token - the token that is returned from the login function
 * @param {string} firstName - The user's firstName
 * @param {string} lastname - The user's lastName
 * @returns {json} The response from the server.
 */
const updateProfile = async (token, firstName, lastname) => {
  const user = {
    firstName: firstName,
    lastName: lastname,
  };
  const options = {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(`${URL_API}/user/profile`, options).then((response) => {
    return response.json();
  });
};

export default updateProfile;
