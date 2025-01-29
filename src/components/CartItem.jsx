import PropTypes from "prop-types";
import Button from "./Button";

export default function CartItem({ product, handleClick }) {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="max-w-64 max-h-64">
        <img src={product.imageUrl} alt={product.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-semibold text-2xl">{product.name}</h2>
        <p className="italic text-gray-700 text-lg">{product.category}</p>
        <p className="text-xl font-semibold">${product.price}</p>
        <div className="card-actions justify-end">
          <Button
            className="btn btn-outline btn-error"
            label={"Remove"}
            handleClick={handleClick}
            variant="btn-outline btn-error"
          />
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
};
