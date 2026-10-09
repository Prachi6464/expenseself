function ExpenseList({ expenses, onDeleteExpense,onEditExpense }) {
  return (
    <section className="card">
      <h2>Your Expenses</h2>

      {expenses.length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        expenses.map((expense) => (
          <div className="expense-item" key={expense._id}>
            <div>
              <strong>{expense.title}</strong>
              <p>Category: {expense.category}</p>
            </div>

            <strong className="expense-amount">
              ₹{expense.amount}
            </strong>

            <button
              type="button"
              onClick={() => onDeleteExpense(expense._id)}
            >
              Delete
            </button>

            <button
              type="button"
              onClick={() => onEditExpense(expense)}
            >
              Edit
            </button>
          </div>
        ))
      )}
    </section>
  );
}

export default ExpenseList;