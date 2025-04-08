import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { CartActions } from "../Store";
import { useState } from "react";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, total, price, id, quantity } = props.item;

  const [numberOfItems, setnumberOfItems] = useState(quantity);
  let TotalAmount = numberOfItems * total;

  const HandleAdd = () => {
    dispatch(CartActions.increase());

    setnumberOfItems(numberOfItems + 1);
  };

  const HandleRemove = () => {
    if (numberOfItems > 1) {
      setnumberOfItems(numberOfItems - 1);
      dispatch(CartActions.reduce());

      return;
    }
    dispatch(CartActions.decrease(id));
    dispatch(CartActions.reduce());
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${TotalAmount.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{numberOfItems}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={HandleRemove}>-</button>
          <button onClick={HandleAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
