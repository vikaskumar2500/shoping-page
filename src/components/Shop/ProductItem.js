import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartReducer";

const ProductItem = (props) => {
  const { id, title, price, description } = props;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const item = {
      id: id,
      title: title,
      price: price,
      description: description,
      qty: 1,
    };

    dispatch(cartActions.addCartItem(item));
  };

  return (
    <li key={id} className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>₹{price}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
