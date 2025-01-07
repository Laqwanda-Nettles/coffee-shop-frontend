import PropTypes from "prop-types";

export default function CartItem({ img, title }) {
  return (
    <>
      <div>{img}</div>
      <div>Cart Item Component {title}</div>
    </>
  );
}

CartItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
