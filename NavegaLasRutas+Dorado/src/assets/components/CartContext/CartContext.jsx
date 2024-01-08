import React, { createContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productoAdd, quantity) => {
    const existingItem = cart.find((item) => item.id === productoAdd.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === productoAdd.id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCart(updatedCart);
    } else {
      const newObj = {
        ...productoAdd,
        quantity,
      };
      setCart([...cart, newObj]);
    }
  };

  const getTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
    return total;
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const clearCart =() => {
    setCart([])
  }

  const getQuantity = () => {
    return cart.reduce((count, el) => count + el.quantity, 0);
  };
  

  const removeSingleItem = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(0, item.quantity - 1) };
      }
      return item;
    }).filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  console.log(cart);

  return (
    <CartContext.Provider value={{ cart, clearCart, setCart, addItem, getTotal, removeItem, removeSingleItem, increaseQuantity, getQuantity }}>
      {children}
    </CartContext.Provider>
  );
};


export default CartContext;

