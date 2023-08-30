import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/uiReducer";
import Notification from "./components/UI/Notification";

function App() {
  const dispatch = useDispatch();

  const showCart = useSelector((state) => state.cart.showCart);
  const cart = useSelector((state) => state.cart);
  let notification = useSelector(state=> state.error.notification);
  useEffect(() => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );
    fetch(
      "https://shoping-page-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(() => {
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: "Send cart data successfully!",
          })
        );
      })
      .catch(() => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sending cart data failed!",
          })
        );
      });
  }, [cart, dispatch]);

  if(notification.status === 'success') {
    setTimeout(()=> {
      notification = null;
    }, 3e3);
  }
  console.log(notification);
  return (
    <Layout>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
