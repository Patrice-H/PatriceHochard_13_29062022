import { Link } from 'react-router-dom';
import logo from '../assets/argentBankLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, toggleLoginLogout } from '../features/login/loginSlice';
import { setFirstName, setLastName } from '../features/profile/profileSlice';

/**
 * Navivation bar component
 *
 * @component
 * @returns {JSX} The React component.
 */
const Navbar = () => {
  const dispatch = useDispatch();

  /**
   * User logout function
   *
   * @description When the user clicks the logout button, it removes the token from
   * local storage and resets the state.
   */
  const logoutUser = () => {
    dispatch(setToken(null));
    dispatch(toggleLoginLogout());
    dispatch(setFirstName(null));
    dispatch(setLastName(null));
    localStorage.removeItem('tokenStored');
  };

  const isUserLogedIn = useSelector((state) => state.login.isUserLogedIn);

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isUserLogedIn ? (
          <Link to="/" className="main-nav-item" onClick={logoutUser}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        ) : (
          <Link to="/signin" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
