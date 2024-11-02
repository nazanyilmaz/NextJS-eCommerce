import { getCurrentUser } from "../actions/getCurrentUser";
import CartClient from "../components/cart/CartClient";

const Cart = async () => {
  const currentUser = await getCurrentUser();
  return (
    <div>
      <CartClient currentUser={currentUser} />
    </div>
  );
};

export default Cart;
