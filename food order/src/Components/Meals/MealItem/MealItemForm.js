import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";
export default function MealItemForm(props) {
  const [isValid, changeValid] = useState(true);
  const inputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enterAmount = inputRef.current.value;
    if (enterAmount.trim().length == 0 || enterAmount < 1 || enterAmount > 5) {
      changeValid(false);
      return;
    }
    props.onAddToCart(+enterAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button>+ Add</button>
      {!isValid && <p>Please enter valid amount</p>}
    </form>
  );
}
