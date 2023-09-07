import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;
  // change title when button is click using state for that
  // const [title, setTitle] = useState(props.title);
  // let title = props.title;
  // const clickHandler = () => {
  //   // title = "yes not working";
  //   setTitle("yes not working");
  //   console.log(title);
  // };
  // console.log("fasdfa");
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
          {/* <button onClick={clickHandler}>Change Title</button> */}
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
