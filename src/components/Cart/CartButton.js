import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { CartActions } from "../Store";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const Quantity = useSelector((state) => state.cart.quantity);
  const clickHandler = () => {
    dispatch(CartActions.ToshowCart());
  };
  return (
    <div>
      
      <button className={classes.button} onClick={clickHandler}>
        <span>My Cart</span>
        <span className={classes.badge}>{Quantity}</span>
      </button>
    </div>
  );
};

export default CartButton;
