import PropTypes from "prop-types";

export default function ProductCard({ img, title, description }) {
  return (
    <>
      <div>Product Component {title}</div>
      <div>{img}</div>
      <div>{description}</div>
    </>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
