import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

export default function NewExpense ( props ) {
  const saveExpenseDataHandler = data => {
    const expenseData = { ...data, id: Math.round( Math.random() * 100 ).toString() };
    if ( typeof props.onAddExpense === 'function' ) {
      props.onAddExpense( expenseData );
    }
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={ saveExpenseDataHandler }/>
    </div>
  );
}