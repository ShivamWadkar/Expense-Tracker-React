import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
function NewExpense(props) {
  const [isAddNewClicked, setIsAddNewClicked] = useState(false);
  const startEditingHandler = () => {
    setIsAddNewClicked(true);
  };
  const stopEditingHandler = () => {
    setIsAddNewClicked(false);
  };
  const addExpenseHandler = (newAddedExpense) => {
    const expense = {
      ...newAddedExpense,
      id: Math.random().toString(),
    };
    props.onSaveExpense(expense);
    setIsAddNewClicked(false);
    //console.log(expense);
  };
  return (
    <div className="new-expense">
      {!isAddNewClicked && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isAddNewClicked && (
        <ExpenseForm
          onSaveExpense={addExpenseHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
