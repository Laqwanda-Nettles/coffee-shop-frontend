import PropTypes from "prop-types";

export default function Button({
  label,
  handleClick,
  variant = "btn-primary",
}) {
  return (
    <button
      onClick={handleClick}
      className={`btn ${variant} shadow-md shadow-secondary-content hover:scale-105 duration-300`}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  variant: PropTypes.string,
};
