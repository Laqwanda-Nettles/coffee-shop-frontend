import PropTypes from "prop-types";
import Button from "./Button";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ProductCard({ product, handleClick }) {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className="card bg-white dark:bg-primary-content w-96 shadow-lg">
      <figure className="px-10 pt-10">
        <img src={product.imageUrl} alt={product.name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <p className="text-lg font-semibold">${product.price}</p>
        {currentPath === "/products" && (
          <Link
            href={`products/${product._id}`}
            className="italic text-info text-sm font-semibold"
          >
            View Item
          </Link>
        )}
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
