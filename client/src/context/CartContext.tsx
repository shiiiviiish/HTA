import React, { createContext, useContext, useState, ReactNode } from 'react';
import Toast from '../components/Toast';

interface CartItem {
  id: string;
  name: string;
  type: string;
  price: number;
  image: string;
  color: { name: string; hex: string };
  quantity: number;
  size?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, colorHex: string, size: string) => void;
  updateQuantity: (id: string, colorHex: string, size: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

interface ToastMessage {
  message: string;
  type: 'success' | 'error' | 'info';
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({ message, type });
  };

  const hideToast = () => {
    setToast(null);
  };

  const addToCart = (item: CartItem) => {
    setCartItems(prevItems => {
      // Check if item already exists in cart
      const existingItem = prevItems.find(
        cartItem => cartItem.id === item.id && 
                   cartItem.color.hex === item.color.hex && 
                   cartItem.size === item.size
      );

      if (existingItem) {
        // Update quantity if item exists
        showToast(`Updated quantity of ${item.name}`, 'success');
        return prevItems.map(cartItem =>
          cartItem.id === item.id && 
          cartItem.color.hex === item.color.hex && 
          cartItem.size === item.size
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        // Add new item
        showToast(`${item.name} added to your cart!`, 'success');
        return [...prevItems, item];
      }
    });
  };

  const removeFromCart = (id: string, colorHex: string, size: string) => {
    const itemToRemove = cartItems.find(
      item => item.id === id && item.color.hex === colorHex && item.size === size
    );
    
    if (itemToRemove) {
      showToast(`${itemToRemove.name} removed from cart`, 'info');
      setCartItems(prevItems => 
        prevItems.filter(item => 
          !(item.id === id && item.color.hex === colorHex && item.size === size)
        )
      );
    }
  };

  const updateQuantity = (id: string, colorHex: string, size: string, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.color.hex === colorHex && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    showToast('Cart has been cleared', 'info');
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice
      }}
    >
      {children}
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={hideToast} 
        />
      )}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
