import { useCart } from "@/context/CartContext";

export default function CartSummary() {
  const { cart } = useCart();
  const salesTaxRate = 0.0445;

  // calculate subtotal by summing up item prices
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // calculate tax
  const tax = subtotal * salesTaxRate;

  // calculate total
  const total = subtotal + tax;
  return (
    <div className="px-6 mx-5 dark:bg-primary-content">
      <div className="text-2xl font-semibold text-center mt-2 mb-4">
        <h2>Order Summary</h2>
      </div>
      <table className="table text-xl">
        <tbody>
          <tr>
            <td>Sub total</td>
            <td>${subtotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Discount</td>
            <td>$0.00</td>
          </tr>
          <tr>
            <td>Tax (4.45%)</td>
            <td>${tax.toFixed(2)}</td>
          </tr>
        </tbody>
        <tfoot className="text-2xl">
          <tr>
            <td>Total</td>
            <td>${total.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
