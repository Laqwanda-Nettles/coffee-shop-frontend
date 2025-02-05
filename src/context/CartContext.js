import { createContext, useContext, useEffect, useState } from "react";
import { loadCartFromLocalStorage, saveCartToLocalStorage } from "@/utils";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage when the app starts
  useEffect(() => {
    const cartData = loadCartFromLocalStorage();
    if (cartData.length > 0) {
      setCart(cartData);
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);

  // Function to add a product to the cart
  const addProductToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item._id === product._id
      );

      if (existingProductIndex !== -1) {
        // Update existing product quantity
        const updatedCart = prevCart.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return updatedCart;
      } else {
        // Add new product
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== itemId));
  };

  // Function to update item quantity
  const updateItemQuantity = (itemId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === itemId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addProductToCart, removeItemFromCart, updateItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
