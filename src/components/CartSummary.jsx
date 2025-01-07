import PropTypes from "prop-types";

export default function CartSummary({ img, title }) {
  return (
    <>
      <div>Cart Summary Component {title}</div>
      <div>{img}</div>
    </>
  );
}

CartSummary.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
