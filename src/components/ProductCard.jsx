import PropTypes from "prop-types";
import Button from "./Button";

export default function ProductCard({ product, handleClick }) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={product.imageUrl} alt={product.name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <div className="card-actions">
          <Button label={"Add to Cart"} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
