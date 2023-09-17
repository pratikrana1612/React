import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

export default function ExpensesList(props) {
  // let expensesContent = <p>No Expense Found</p>;
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
}
