import Button from "./Button";
import PropTypes from "prop-types";

export default function Hero({ handleClick }) {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(hero.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-50 bg-black"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Welcome to Jazzed Up Coffee!
          </h1>
          <p className="mb-5 text-2xl font-semibold italic">
            ❝Jazz Up Your Morning with Our Signature Brews.❞
          </p>
          <Button label={"Sign Up Now"} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
