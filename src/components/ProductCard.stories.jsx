import ProductCard from './ProductCard';

const meta = {
  component: ProductCard,
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
      "_id": 0,
      "imageUrl": "../../espresso.jpg"
    }
  }
};