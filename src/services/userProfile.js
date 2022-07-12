import { URL_API } from '../utils/config';

/**
 * Get profile service
 *
 * @description It takes a token as an argument and returns data profile in a JSON object.
 * @async
 * @param {string} token - the token that you get from the login function
 * @returns {json} The response from the server.
 */
const userProfile = async (token) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(`${URL_API}/user/profile`, options).then((response) => {
    return response.json();
  });
};

export default userProfile;
