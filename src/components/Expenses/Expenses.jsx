import React, { useState, useEffect } from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import './Expenses.css';

export default function Expenses ( { expenses } ) {
  const [ filteredExpenses, setFilteredExpenses ] = useState( expenses );
  const [ filterYear, setFilterYear ] = useState( '' );
  const yearChanged = year => {
    setFilterYear( year );
  }

  useEffect( () => {
    setFilteredExpenses( expenses.filter( expense => {
      const expenseYear = new Date( expense.date ).getFullYear();
      return filterYear.length ? parseInt( filterYear ) === expenseYear : true;
    } ) );
  }, [ filterYear, expenses ] );

  return (
    <div className="expenses">
      <ExpenseFilter onChangeCallback={ yearChanged } />
      {
        filteredExpenses && filteredExpenses.length ?
          filteredExpenses.map( ( item, index ) => (
            <ExpenseItem item={item} key={index} />
          ) ) : null
      }
    </div>
  )
}