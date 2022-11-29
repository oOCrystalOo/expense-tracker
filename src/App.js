import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [ expenses, setExpenses ]  = useState( [
    {
      id: 1,
      title: 'Toilet Paper',
      amount: 19.99,
      date: new Date(2022, 10, 1)
    },
    {
      id: 2,
      title: 'Toothpaste',
      amount: 9.99,
      date: new Date(2022, 10, 1)
    },
    {
      id: 3,
      title: 'Toothbrush',
      amount: 6.99,
      date: new Date(2022, 10, 1)
    }
  ] );

  const addExpense = newExpense => {
    setExpenses( [ ...expenses, newExpense ] );
  }
  
  return (
    <div>
      <NewExpense onAddExpense={ addExpense } />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
