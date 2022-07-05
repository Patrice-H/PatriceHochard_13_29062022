import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import login from '../services/login';
import {
  addToken,
  toggleLoginLogout,
  manageErrorLogin,
} from '../features/login/loginSlice';

const SignInSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const errorLogin = useSelector((state) => state.login.errorLogin);

  const loginUser = () => {
    login().then((data) => {
      if (data.status === 200) {
        dispatch(addToken(data.body.token));
        dispatch(toggleLoginLogout());
        if (errorLogin !== null) {
          dispatch(manageErrorLogin(null));
        }
        navigate('/profile');
      } else {
        const errorMessage = data.message.split('Error: ')[1];
        dispatch(manageErrorLogin(errorMessage));
        console.clear();
      }
    });
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          {errorLogin === 'User not found!' ? (
            <>
              <div className="label-error-wrapper">
                <label htmlFor="username">Username</label>
                <span>not found</span>
              </div>
              <input type="text" id="username" className="input-error" />
            </>
          ) : (
            <>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </>
          )}
        </div>
        <div className="input-wrapper">
          {errorLogin === 'Password is invalid' ? (
            <>
              <div className="label-error-wrapper">
                <label htmlFor="password">Password</label>
                <span>is invalid</span>
              </div>
              <input type="password" id="password" className="input-error" />
            </>
          ) : (
            <>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </>
          )}
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button
          className="sign-in-button"
          onClick={(e) => {
            e.preventDefault();
            loginUser();
          }}
        >
          Sign In
        </button>
      </form>
    </section>
  );
};

export default SignInSection;
