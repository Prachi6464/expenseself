import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
const [title, setTitle] = useState("");
const [amount, setAmount] = useState("");
const [category, setCategory] = useState("Food");
const [error, setError] = useState("");

const handleSubmit = async (e) => {
e.preventDefault();

const cleanTitle = title.trim();
const numericAmount = Number(amount);

if (!cleanTitle) {
  setError("Please enter an expense title.");
  return;
}

if (!amount || !Number.isFinite(numericAmount) || numericAmount <= 0) {
  setError("Please enter an amount greater than ₹0.");
  return;
}

setError("");

await onAddExpense({
  title: cleanTitle,
  amount: numericAmount,
  category,
});

setTitle("");
setAmount("");
setCategory("Food");

};

return (
<section className="card">
<h2>Add New Expense</h2>

  <form onSubmit={handleSubmit}>
    <label htmlFor="expense-title">Expense Title</label>
    <input
      id="expense-title"
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="e.g. Lunch"
      required
    />

    <label htmlFor="expense-amount">Amount (₹)</label>
    <input
      id="expense-amount"
      type="number"
      min="0.01"
      step="0.01"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      placeholder="Enter amount"
      required
    />

    <label htmlFor="expense-category">Category</label>
    <select
      id="expense-category"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="Food">Food</option>
      <option value="Travel">Travel</option>
      <option value="Shopping">Shopping</option>
      <option value="Bills">Bills</option>
      <option value="Other">Other</option>
    </select>

    {error && <p style={{ color: "red" }}>{error}</p>}

    <button type="submit">Add Expense</button>
  </form>
</section>

);
}

export default ExpenseForm;