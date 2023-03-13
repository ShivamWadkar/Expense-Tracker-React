import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const selectedValue = (selectedYear) => {
    //console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let changedExpenses = <p className="white-text">No data found</p>;
  if (filteredExpenses.length > 0) {
    changedExpenses = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        
        <ExpenseFilter selected={filteredYear} onValueSelect={selectedValue} />
        <ExpensesChart expenses={filteredExpenses} />
        {changedExpenses}
      </Card>
    </div>
  );
}

export default Expenses;
