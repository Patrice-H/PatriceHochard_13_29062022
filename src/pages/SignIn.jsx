import Navbar from '../components/Navbar';
import SignInSection from '../components/SignInSection';
import Footer from '../components/Footer';

const SignIn = () => {
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
