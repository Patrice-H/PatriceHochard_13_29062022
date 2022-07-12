import { useSelector, useDispatch } from 'react-redux';
import { setEditMode } from '../features/profile/profileSlice';

/**
 * Profile information component
 *
 * @description Component allowing the display of profile information
 * @component
 * @returns {JSX} The React component.
 */
const ProfileInformations = () => {
  const firstName = useSelector((state) => state.profile.firstName);
  const lastName = useSelector((state) => state.profile.lastName);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <h1>
        <span>Welcome back</span>
        <br />
        <span>
          {firstName && firstName}
          &nbsp;
          {lastName && lastName}
        </span>
      </h1>
      <button
        className="dark-button info-button"
        onClick={() => {
          dispatch(setEditMode(true));
        }}
      >
        Edit Name
      </button>
    </div>
  );
};

export default ProfileInformations;
