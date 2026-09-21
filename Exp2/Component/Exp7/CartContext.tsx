import React, { createContext, useState, ReactNode } from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartContextType {
  cartItems: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addItem = (product: Product) => {
    setCartItems(currentItems => [
      ...currentItems,
      product,
    ]);
  };

  const removeItem = (productId: number) => {
    setCartItems(currentItems => {
      const index = currentItems.findIndex(
        item => item.id === productId
      );

      if (index === -1) {
        return currentItems;
      }

      const updatedItems = [...currentItems];
      updatedItems.splice(index, 1);

      return updatedItems;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};