import CartSummary from './CartSummary';

const meta = {
  component: CartSummary,
};

export default meta;

export const Default = {
  args: {
    product: {
      "name": "Croissant",
      "description": "A buttery, flaky, viennoiserie pastry named for its crescent shape.",
      "price": 2,
      "category": "Food",
      "stock": 8,
      "imageUrl": "../../croissant.jpg",
      "_id": 2
    }
  }
};