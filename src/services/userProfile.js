import { URL_API } from '../utils/config';

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
