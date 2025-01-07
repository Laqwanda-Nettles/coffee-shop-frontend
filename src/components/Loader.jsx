import PropTypes from "prop-types";

export default function Loader({ message }) {
  return (
    <>
      <div>Loading Component {message}</div>
    </>
  );
}

Loader.propTypes = {
  message: PropTypes.string.isRequired,
};
