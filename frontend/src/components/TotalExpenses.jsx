function TotalExpenses({ expenses }) {
  const total = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  return (
    <section className="total-card">
      <p>Total Expenses</p>
      <h2>₹{total.toLocaleString("en-IN")}</h2>
      <span>{expenses.length} transactions</span>
    </section>
  );
}

export default TotalExpenses;