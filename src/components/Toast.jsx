import PropTypes from "prop-types";

export default function Toast({ message }) {
  return (
    <>
      <div>Toast Component {message}</div>
    </>
  );
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
};
