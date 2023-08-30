import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul >
        {items.length === 0 && (
          <p style={{ textAlign: "center", margin:'2rem' }}>
            Your cart is empty! please add item.
          </p>
        )}
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      {items.length !==0 && <div className={classes["total-price"]}>
        <div>Total Price</div>
        <div>₹{totalPrice}</div>
      </div>}
    </Card>
  );
};

export default Cart;
