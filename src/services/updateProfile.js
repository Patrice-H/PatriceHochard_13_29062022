import { URL_API } from '../utils/config';

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
