import TotalExpenses from "../components/TotalExpenses";
import ExpenseList from "../components/ExpenseList";

function Dashboard({ expenses }) {
  const recentExpenses = expenses.slice(0, 5);

  return (
    <div className="page">
      <h1>Dashboard</h1>
      <p>Welcome to your Expense Tracker.</p>

      <TotalExpenses expenses={expenses} />

      <section className="card">
        <h2>Recent Expenses</h2>

        <ExpenseList
          expenses={recentExpenses}
          onDeleteExpense={() => {}}
          onEditExpense={() => {}}
        />
      </section>
    </div>
  );
}

export default Dashboard;