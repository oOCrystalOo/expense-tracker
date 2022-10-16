import React from 'react';
import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses  = [
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
  ]
  
  return (
    <div>
      <h2>Expense Tracker</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
