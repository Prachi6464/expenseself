import ExpenseForm from "../components/ExpenseForm";

function AddExpense({ onAddExpense }) {
  return (
    <div className="page">
      <h1>Add Expense</h1>
      <p>Enter the details of your new expense.</p>

      <ExpenseForm onAddExpense={onAddExpense} />
    </div>
  );
}

export default AddExpense;