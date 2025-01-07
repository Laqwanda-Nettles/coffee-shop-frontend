import PropTypes from "prop-types";

export default function Footer({ info }) {
  return (
    <>
      <div>Footer Component {info}</div>
    </>
  );
}

Footer.propTypes = {
  info: PropTypes.string.isRequired,
};
