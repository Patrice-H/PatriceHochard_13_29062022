import { useSelector, useDispatch } from 'react-redux';
import { setFirstName, setLastName, setEditMode } from '../redux/profileSlice';
import updateProfile from '../services/updateProfile';

/**
 * Profile editor component
 *
 * @description Component allowing profile editing
 * @component
 * @returns {JSX} The React component.
 */
const ProfileEditor = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const firstName = useSelector((state) => state.profile.firstName);
  const lastName = useSelector((state) => state.profile.lastName);

  /**
   * User update function
   *
   * @description Updates profile state and lauches function to update in database
   * @see {@link updateProfile}
   */
  const editName = () => {
    const firstInput = document.getElementById('first-input').value;
    const lastInput = document.getElementById('last-input').value;
    let firstUpdated, lastUpdated;

    // prettier-ignore
    firstInput === '' ? (firstUpdated = firstName) : (firstUpdated = firstInput);
    lastInput === '' ? (lastUpdated = lastName) : (lastUpdated = lastInput);

    if (firstUpdated !== firstName || lastUpdated !== lastName) {
      updateProfile(token, firstUpdated, lastUpdated).then((data) => {
        dispatch(setFirstName(data.body.firstName));
        dispatch(setLastName(data.body.lastName));
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
