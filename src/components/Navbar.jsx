import PropTypes from "prop-types";
import "../styles/navbar.css";

export default function Navbar({ title }) {
  return <div className="navbar">Navbar Component {title}</div>;
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
