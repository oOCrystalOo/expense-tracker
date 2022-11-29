import React, { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm ( props ) {
  const today = new Date().toLocaleDateString( 'en-CA' );
  const [ enteredTitle, setEnteredTitle ] = useState( '' );
  const [ enteredAmount, setEnteredAmount ] = useState( '' );
  const [ enteredDate, setEnteredDate ] = useState( '' );
  const onTitleChange = event => {
    setEnteredTitle( event.target.value );
  }
  const onAmountChange = event => {
    setEnteredAmount( event.target.value );
  }
  const onDateChange = event => {
    setEnteredDate( event.target.value );
  }
  const onSubmit = event => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle, 
      amount: enteredAmount,
      date: new Date( enteredDate )
    };
    setEnteredTitle( '' );
    setEnteredAmount( '' );
    setEnteredDate( '' );
    if ( typeof props.onSaveExpenseData === 'function' ) {
      props.onSaveExpenseData( expenseData );
    }
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" name="title" value={enteredTitle} onChange={onTitleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amouont</label>
          <input type="number" name="amount" min="0.01" step="0.01" value={enteredAmount} onChange={onAmountChange} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" name="date" min="2019-01-01" max={today} value={enteredDate} onChange={onDateChange}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}