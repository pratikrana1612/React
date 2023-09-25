import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import CartItem from "./CartItem";

export default function Cart(props) {
  const ctx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );
  return (
    <Modal onCartHide={props.onCartHide}>
      <div>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>${ctx.totalAmount.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button-alt"]} onClick={props.onCartHide}>
            Close
          </button>
          {ctx.items.length && (
            <button className={classes.button}>Order</button>
          )}
        </div>
      </div>
    </Modal>
  );
}
