import { CartContextProvider } from "@/hooks/UseCart";

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};

export default CartProvider;
