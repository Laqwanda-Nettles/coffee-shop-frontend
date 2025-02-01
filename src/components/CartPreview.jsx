import PropTypes from "prop-types";

export default function CartPreview({ product }) {
  return (
    <table>
      <tbody>
        <tr className="flex items-center gap-5" key={product._id}>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img src={product.imageUrl} alt={product.name} />
                </div>
              </div>
              <div>
                <div className="font-bold">{product.name}</div>
                <div className="text-gray-500">x {product.quantity}</div>
              </div>
            </div>
          </td>
          <td className="font-semibold text-success">
            ${(product.price * product.quantity).toFixed(2)}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

CartPreview.propTypes = {
  product: PropTypes.object.isRequired,
};
