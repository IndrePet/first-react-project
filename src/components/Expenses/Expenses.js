import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';

const Expenses = props => {
  const item = props.expenses;

  const [filteredYear, setFilteredYear] = useState('2022');

  const filterHandler = year => {
    setFilteredYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilter={filterHandler} year={filteredYear} />
        <ExpenseItem
          title={item[0].title}
          amount={item[0].amount}
          date={item[0].date}
        />
        <ExpenseItem
          title={item[1].title}
          amount={item[1].amount}
          date={item[1].date}
        />
        <ExpenseItem
          title={item[2].title}
          amount={item[2].amount}
          date={item[2].date}
        />
        <ExpenseItem
          title={item[3].title}
          amount={item[3].amount}
          date={item[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
