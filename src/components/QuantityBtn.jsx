import { useState } from "react";
import Button from "./Button";

export default function QuantityBtn({ quantity, onQuantityChange }) {
  const handleDecrease = () => {
    onQuantityChange(Math.max(1, quantity - 1)); //Prevents value going below 1
  };

  const handleIncrease = () => {
    onQuantityChange(quantity + 1);
  };

  const handleInputChange = (e) => {
    const newValue = Number(e.target.value) || 1;
    onQuantityChange(newValue);
  };

  return (
    <div className="join border border-base-300 rounded-md">
      <Button
        label={"-"}
        variant="join-item btn-secondary dark:btn-info"
        handleClick={handleDecrease}
      />
      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        className="input input-bordered join-item w-12 text-center [-moz-appearance:_textfield] appearance-none"
      />
      <Button
        label={"+"}
        variant="join-item btn-primary dark:btn-accent"
        handleClick={handleIncrease}
      />
    </div>
  );
}
