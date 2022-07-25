import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import SignInSection from '../components/SignInSection';
import Footer from '../components/Footer';

/**
 *  Signin page component
 *
 * @component
 * @returns {JSX} The React component.
 */
const SignIn = () => {
  const navigate = useNavigate();
  const isUserLogedIn = useSelector((state) => state.login.isUserLogedIn);

  useEffect(() => {
    document.title = 'Argent Bank - Sign In Page';
    if (isUserLogedIn) {
      navigate('/accounts');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <main className="main signin bg-dark">
        <SignInSection />
      </main>
      <Footer />
    </>
  );
};

export default SignIn;
