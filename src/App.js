import { Fragment, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
// import { CartActions } from "./components/Store";
import Notification from "./components/UI/Notification";
import {SendCartData} from "./components/Store"

let isinitial = true

function App() {
  const cart = useSelector((state) => state.cart.items);
  const notification = useSelector((state) => state.cart.notification);
  const dispatch = useDispatch();

  
  useEffect(() => {
    // THUNKS WAS USED INSTEAD IN THE REDUX FILE
    // const AddData = async () => {
      // dispatch(
      //   CartActions.showNotification({
      //     status: "pending",
      //     title: "Loading",
      //     message: "Please wait, Sending cart",
      //   })
      // );
      // const response = await fetch(
      //   "https://react-cd9ef-default-rtdb.firebaseio.com/products.json",
      //   {
      //     method: "PUT",
      //     body: JSON.stringify(cart),
      //   }
      // );

      // if (!response.ok) {
      //   throw new Error("Failed to fetch data");
      // }
      // dispatch(
      //   CartActions.showNotification({
      //     status: "success",
      //     title: "success",
      //     message: "Sent cart data successsfully",
      //   })
      // );
    // };



    // AddData().catch((error) => {
    //   dispatch(
    //     CartActions.showNotification({
    //       status: "error",
    //       title: "Error",
    //       message: "Sending data failed",
    //     })
    //   );
    // });

    if(isinitial){
      isinitial = false
      return 

    }


    dispatch(SendCartData(cart))





  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && <Notification
        title={notification.title}
        message={notification.message}
        status={notification.status}
      />}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
