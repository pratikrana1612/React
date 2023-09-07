import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpenseChart";

function Expenses({ expenses }) {
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
  let filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === +yearValue
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        yearValue={yearValue}
        onChangeYear={onChangeYearHandler}
      ></ExpensesFilter>
      {/* {filteredExpenses.length || <p>No Expense Found</p>} */}
      {/* <p>{messageYearInfo}</p> */}
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem> */}
    </Card>
  );
}

export default Expenses;
