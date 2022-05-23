import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = props => {
  const [formStatus, setFormStatus] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.trunc(Math.random() * 1000).toString(),
    };
    props.onAddExpense(expenseData);
    setFormStatus(false);
  };

  const editingHandler = () => {
    setFormStatus(true);
  };
  const cancelationHandler = () => {
    setFormStatus(false);
  };

  if (formStatus) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelationHandler}
        />
      </div>
    );
  }
  return (
    <div className="new-expense">
      <button onClick={editingHandler}>Add New Expense</button>
    </div>
  );
};

export default NewExpense;
