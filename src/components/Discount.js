import discount from "../assets/discount.jpg";

const Discount = () => {
  return (
    <div className="discount-banner">
      <img src={discount} alt="discount" />
      <h1>
        Unlock your Adventure <br />
        Enjoy <span className="highlight">20% off</span> on your next travel
        experience.
      </h1>
    </div>
  );
};
export default Discount;
