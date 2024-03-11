import React, { ReactNode, createContext, useState } from "react";
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  //Will add more property as per our requirement
};
interface CartItem extends Product {
  qty: number;
}
interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: Product) => void;
  cartItemCount: number;
  cartTotal: number;
  increaseqty: (productId: number) => void;
  decreaseqty: (productId: number) => void;
  removeProduct: (productId: number) => void;
  numberqty: (productId: number, count: number) => void;
}
interface CartProviderProps {
  children: ReactNode;
}
const CartContext = createContext<CartContextProps | undefined>(undefined);
const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const presentItem = cart.find((item) => item.id === product.id);
    if (presentItem) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id ? { ...item, qty: presentItem.qty + 1 } : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...product, qty: 1 }]);
    }
  };
  const increaseqty = (productId: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };
  const decreaseqty = (productId: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === productId ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };
  const numberqty = (productId: number, count: number) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === productId ? { ...item, qty: count } : item))
        .filter((item) => item.qty > 0)
    );
  };
  const removeProduct = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };
  const cartTotal = cart.reduce(
    (total, currItem) => total + currItem.price * currItem.qty,
    0
  );
  const value: CartContextProps = {
    cart,
    addToCart,
    cartItemCount: cart.length,
    cartTotal,
    increaseqty,
    decreaseqty,
    removeProduct,
    numberqty,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
// max qty,dropdown
// razer pay for
// Analytics integration
