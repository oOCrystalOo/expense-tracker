import './expenses.css';
import React from 'react';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';

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
      <div className="expenses">
        {
          expenses && expenses.length ?
            expenses.map( ( item, index ) => (
              <ExpenseItem item={item} key={index} />
            ) ) : null
        }
      </div>
    </div>
  );
}

export default App;
