import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Feature from '../components/Feature';
import { featuresList } from '../data/featuresList';

/**
 *  Home page component
 *
 * @component
 * @returns {JSX} The React component.
 */
const Home = () => {
  const navigate = useNavigate();
  const isUserLogedIn = useSelector((state) => state.login.isUserLogedIn);

  useEffect(() => {
    document.title = 'Argent Bank - Home Page';
    if (isUserLogedIn) {
      navigate('/accounts');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {featuresList.map((feature) => (
            <Feature
              key={feature.id}
              src={feature.src}
              alt={feature.alt}
              title={feature.title}
              text={feature.text}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
