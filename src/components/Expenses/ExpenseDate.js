import './ExpenseDate.css';

const ExpenseDate = props => {
  const year = props.date.toLocaleString('lt-LT', { year: 'numeric' });
  const month = props.date.toLocaleString('lt-LT', { month: 'long' });
  const day = props.date.toLocaleString('lt-LT', { day: '2-digit' });

  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
