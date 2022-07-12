import Navbar from '../components/Navbar';

const Error404 = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="error-404-number">404</div>
        <div className="error-404-text">
          Oops! The page you requested does not exist.
        </div>
      </main>
    </>
  );
};

export default Error404;
