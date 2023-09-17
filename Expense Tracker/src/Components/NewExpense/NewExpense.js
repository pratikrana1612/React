import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const newExpenseSaveHandler = (newExpense) => {
    const expenseData = {
      ...newExpense,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveNewExpense={newExpenseSaveHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
