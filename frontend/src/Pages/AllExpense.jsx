import ExpenseList from "../components/ExpenseList";
import { useState } from "react";

function AllExpenses({ expenses = [], onDeleteExpense, onEditExpense }) {
const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");
const [appliedSearch, setAppliedSearch] = useState("");
const [appliedCategory, setAppliedCategory] = useState("All");

const categories = ["All", "Food", "Travel", "Shopping", "Bills", "Other"];

const handleSearch = () => {
setAppliedSearch(search.trim().toLowerCase());
setAppliedCategory(category);
};

const safeExpenses = Array.isArray(expenses) ? expenses : [];

const filteredExpenses = safeExpenses.filter((expense) => {
const title = (expense.title || "").toLowerCase();
const matchesSearch = title.includes(appliedSearch);
const matchesCategory =
appliedCategory === "All" || expense.category === appliedCategory;

return matchesSearch && matchesCategory;

});

return (
<div className="page">
<h1>All Expenses</h1>
<p>Search expenses by title and category.</p>

  <section className="card">
    <h2>Search Expenses</h2>

    <input
      type="text"
      placeholder="Enter expense title..."
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />

    <label htmlFor="category-filter">Filter by Category</label>
    <select
      id="category-filter"
      value={category}
      onChange={(event) => setCategory(event.target.value)}
    >
      {categories.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>

    <button
      type="button"
      className="search-filter-button"
      onClick={handleSearch}
    >
      Search
    </button>

    <p>Showing {filteredExpenses.length} expenses</p>
  </section>

  <section className="card">
    <ExpenseList
      expenses={filteredExpenses}
      onDeleteExpense={onDeleteExpense}
      onEditExpense={onEditExpense}
    />
  </section>
</div>

);
}

export default AllExpenses;