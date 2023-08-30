import classes from "./CartButton.module.css";
import { cartActions } from "../../store/cartReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  // console.log(items);
  const totalQty = items.reduce((total, item) => total + item.qty, 0);

  return (
    <button
      className={classes.button}
      onClick={() => {
        dispatch(cartActions.onCart());
      }}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{totalQty}</span>
    </button>
  );
};

export default CartButton;
