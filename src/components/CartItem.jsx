import PropTypes from "prop-types";
import Button from "./Button";
import { useEffect, useState } from "react";
import QuantityBtn from "./QuantityBtn";

export default function CartItem({ product, onQuantityChange, handleRemove }) {
  const [quantity, setQuantity] = useState(product.quantity || 1);

  useEffect(() => {
    onQuantityChange(product._id, quantity);
  }, [quantity]);

  const totalPrice = product.price * quantity;

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="max-w-64 max-h-64">
        <img src={product.imageUrl} alt={product.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-semibold text-2xl">{product.name}</h2>
        <p className="italic text-gray-700 text-lg">{product.category}</p>
        <div className="flex items-center gap-4">
          <p className="text-xl font-semibold">${totalPrice.toFixed(2)}</p>
          <QuantityBtn quantity={quantity} onQuantityChange={setQuantity} />
        </div>
        <div className="card-actions justify-end mt-2">
          <Button
            className="btn btn-outline btn-error"
            label={"Remove"}
            handleClick={() => handleRemove(product._id)}
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
