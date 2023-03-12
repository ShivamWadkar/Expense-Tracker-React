import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
function NewExpense(props){

    const addExpenseHandler=(newAddedExpense)=>{
        const expense={
            ...newAddedExpense,
            id:Math.random().toString()
        }
        props.onSaveExpense(expense);
        //console.log(expense);

    };
    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpense={addExpenseHandler}/>
        </div>
    )
}

export default NewExpense;