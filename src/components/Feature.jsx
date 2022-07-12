/**
 * Feature component
 *
 * @description It takes in an object with four properties, and returns a div with three children.
 * @component
 * @param {object} - The props of the component
 * @returns {JSX} The React component.
 */
const Feature = ({ src, alt, title, text }) => {
  return (
    <div className="feature-item">
      <img src={src} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Feature;
