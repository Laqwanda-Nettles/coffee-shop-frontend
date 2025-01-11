export default function CartSummary() {
  return (
    <div className="px-6 mx-5">
      <div className="text-3xl font-semibold text-center mb-4">
        <h2>Order Summary</h2>
      </div>
      <table className="table text-xl">
        <tbody>
          <tr>
            <td>Sub total</td>
            <td>$7.00</td>
          </tr>
          <tr>
            <td>Discount</td>
            <td>$0.00</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>$2.54</td>
          </tr>
        </tbody>
        <tfoot className="text-2xl">
          <tr>
            <td>Total</td>
            <td>$9.54</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
