import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses({ expense }) {
  const [yearValue, setYearValue] = useState("2020");
  // derived value from the state
  // let messageYearInfo = "2019, 2021 and 2022 is hidden";
  // if (yearValue === "2021") {
  //   messageYearInfo = "2019, 2020 and 2022 is hidden";
  // } else if (yearValue === "2019") {
  //   messageYearInfo = "2020, 2021 and 2022 is hidden";
  // } else if (yearValue === "2022") {
  //   messageYearInfo = "2019, 2020 and 2021 is hidden";
  // }
  const onChangeYearHandler = (year) => {
    console.log(year);
    setYearValue(year);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        yearValue={yearValue}
        onChangeYear={onChangeYearHandler}
      ></ExpensesFilter>
      {/* <p>{messageYearInfo}</p> */}
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
