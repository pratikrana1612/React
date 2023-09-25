import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/cart-context";

const CartButton = (props) => {
  const [isAnimation, changeAnimation] = useState(false);
  const ctx = useContext(CartContext);

  const numberOfCartItems = ctx.items.reduce(
    (sum, item) => sum + item.amount,
    0
  );
  const animationBtn = `${classes.button} ${isAnimation ? classes.bump : ""}`;
  useEffect(() => {
    if (ctx.items.length === 0) {
      return;
    }
    changeAnimation(true);
    const timeId = setTimeout(() => {
      changeAnimation(false);
    }, 300);
    return () => {
      clearTimeout(timeId);
    };
  }, [ctx.items]);
  return (
    <button className={animationBtn} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default CartButton;
