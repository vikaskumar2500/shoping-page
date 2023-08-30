import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartReducer";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, qty, price, id } = props.item;
  const total = qty * price;
  return (
    <li key={id} className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ₹{total} <span className={classes.itemprice}>(₹{price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{qty}</span>
        </div>
        <div className={classes.actions}>
          <button
            onClick={() => {
              dispatch(cartActions.removeCartItem(id));
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              dispatch(cartActions.addCartItem(props.item));
            }}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
