import { Link } from 'react-router-dom';
import logo from '../assets/argentBankLogo.png';

const Navbar = () => {
  return (
    <nav class="main-nav">
      <Link to="./" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to="./signin" className="main-nav-item">
          <i class="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
