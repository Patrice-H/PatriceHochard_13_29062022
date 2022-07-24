import { useEffect } from 'react';
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
  useEffect(() => {
    document.title = 'Argent Bank - Sign In Page';
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
