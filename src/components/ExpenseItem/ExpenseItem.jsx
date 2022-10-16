import './ExpenseItem.css';
import './ExpenseDate.css';

export default function ExpenseItem ( props ) {
  const month = props.item.date.toLocaleString( 'en-CA', { month: 'long' } );
  const day   = props.item.date.toLocaleString( 'en-CA', { day: '2-digit' } );
  const year  = props.item.date.getFullYear();
  const formatter = new Intl.NumberFormat( 'en-CA', {
    style: 'currency',
    currency: 'CAD',
  } );
  const amount= formatter.format( props.item.amount ) !== '$NaN' ? formatter.format( props.item.amount ) : props.item.amount;

  return (
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__date">{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.item.title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  )
}