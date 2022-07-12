/**
 * Account component
 *
 * @description It takes in three props, and returns a section with a title, an amount, and a description
 * @component
 * @param {object} - The props of the component
 * @returns {JSX} The React component.
 */
const Account = ({ title, amount, description }) => {
  const formatAmount = () => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{formatAmount()}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

export default Account;
