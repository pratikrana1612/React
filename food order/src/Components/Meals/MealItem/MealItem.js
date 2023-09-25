import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import { useContext } from "react";
import CartContext from "../../../Store/cart-context";

const MealItem = (props) => {
  const ctx = useContext(CartContext);
  const onAddToCart = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <div className={classes.price}>${props.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={onAddToCart}></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;
