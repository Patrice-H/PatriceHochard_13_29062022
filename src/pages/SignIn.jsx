import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import SignInSection from '../components/SignInSection';
import Footer from '../components/Footer';

const SignIn = () => {
  useEffect(() => {
    document.title = 'Argent Bank - Sign In Page';
  }, []);

  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        <SignInSection />
      </main>
      <Footer />
    </>
  );
};

export default SignIn;
