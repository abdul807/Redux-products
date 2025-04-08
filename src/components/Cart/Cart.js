import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const showcart = useSelector((state) => state.cart.showCart);
  const Items = useSelector((state) => state.cart.items);

  return (
    <div>
      {showcart && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {Items.map((item) => (
              <CartItem
              key={item.id}
                item= {item}
              />
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
};

export default Cart;
