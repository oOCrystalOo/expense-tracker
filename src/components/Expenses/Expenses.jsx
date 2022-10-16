import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './Expenses.css';

export default function Expenses ( { expenses } ) {
  return (
    <div className="expenses">
      {
        expenses && expenses.length ?
          expenses.map( ( item, index ) => (
            <ExpenseItem item={item} key={index} />
          ) ) : null
      }
    </div>
  )
}