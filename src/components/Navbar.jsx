import PropTypes from "prop-types";

export default function Navbar({ title }) {
  return <div className="navbar">Navbar Component {title}</div>;
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
