import CartItem from './CartItem';

const meta = {
  component: CartItem,
};

export default meta;

export const Default = {
  args: {
    product: {
      "name": "Espresso",
      "description": "A strong and concentrated coffee beverage.",
      "price": 2.5,
      "category": "Beverage",
      "stock": 10,
      "imageUrl": "../../espresso.jpg",
      "_id": 0
    }
  }
};