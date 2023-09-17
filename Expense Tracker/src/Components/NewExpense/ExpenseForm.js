import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isClicked, changeClicked] = useState(false);

  const inputChangeHandler = (indentifier, value) => {
    if (indentifier === "title") {
      setEnteredTitle(value);
    } else if (indentifier === "amount") {
      setEnteredAmount(value);
    } else {
      setEnteredDate(value);
    }
  };
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  // const titleChangeHandler = (event) => {
  //   setEnteredTitle(event.target.value);
  //   // setEnteredTitle({
  //   //   ...userInput,
  //   //   enteredTitle: event.target.value,
  //   // });
  //   // setUserInput((prevState) => {
  //   //   return { ...prevState, enteredTitle: event.target.value };
  //   // });
  // };

  // const AmountChangeHandler = (event) => {
  //   setEnteredAmount(event.target.value);
  //   // setEnteredTitle({
  //   //   ...userInput,
  //   //   enteredAmount: event.target.value,
  //   // });
  // };
  // const DateChangeHandler = (event) => {
  //   setEnteredDate(event.target.value);
  //   // setEnteredTitle({
  //   //   ...userInput,
  //   //   enteredDate: event.target.value,
  //   // });
  // };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveNewExpense(expenseData);
    console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  let form;
  if (isClicked) {
    form = (
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={(event) => inputChangeHandler("date", event.target.value)}
          ></input>
        </div>
      </div>
    );
  }
  return (
    <form onSubmit={submitHandler}>
      {form}
      <div className="new-expense__actions ">
        {isClicked && (
          <button onClick={() => changeClicked(false)}>Cancel</button>
        )}
        <button type="submit" onClick={() => changeClicked(!isClicked)}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
