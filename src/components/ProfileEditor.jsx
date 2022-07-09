import { useSelector, useDispatch } from 'react-redux';
import {
  getFirstName,
  getLastName,
  setEditMode,
} from '../features/profile/profileSlice';
import updateProfile from '../services/updateProfile';

const ProfileEditor = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const firstName = useSelector((state) => state.profile.firstName);
  const lastName = useSelector((state) => state.profile.lastName);

  const editName = () => {
    const firstInput = document.getElementById('first-input').value;
    const lastInput = document.getElementById('last-input').value;
    let firstUpdated, lastUpdated;

    // prettier-ignore
    firstInput === '' ? (firstUpdated = firstName) : (firstUpdated = firstInput);
    lastInput === '' ? (lastUpdated = lastName) : (lastUpdated = lastInput);

    if (firstUpdated !== firstName || lastUpdated !== lastName) {
      updateProfile(token, firstUpdated, lastUpdated).then((data) => {
        dispatch(getFirstName(data.body.firstName));
        dispatch(getLastName(data.body.lastName));
      });
    }
    dispatch(setEditMode(false));
  };

  return (
    <div className="header">
      <h1>
        <span>Welcome back</span>
      </h1>
      <div className="edit-input">
        <input type="text" id="first-input" placeholder={firstName} />
        <input type="text" id="last-input" placeholder={lastName} />
      </div>
      <div>
        <button
          className="light-button edit-button"
          onClick={() => {
            editName();
          }}
        >
          Save
        </button>
        <button
          className="light-button edit-button"
          onClick={() => {
            dispatch(setEditMode(false));
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ProfileEditor;
