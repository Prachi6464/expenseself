


// function SearchExpense({
// search,
// onSearchChange,
// onSearch,
// }) {
// return (
// <section className="search-box">
// <h2>Search Expenses</h2>

//   <div className="search-row">
//     <input
//       type="text"
//       placeholder="Search by expense title..."
//       value={search}
//       onChange={(e) => onSearchChange(e.target.value)}
//     />

//     <button type="button" onClick={onSearch}>
//       Search
//     </button>
//   </div>
// </section>

// );
// }

// export default SearchExpense;



import ExpenseList from "../components/ExpenseList";
import SearchExpense from "../components/SearchExpense";
import { useState } from "react";

function AllExpenses({ expenses, onDeleteExpense, onEditExpense }) {
const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");
const [appliedSearch, setAppliedSearch] = useState("");
const [appliedCategory, setAppliedCategory] = useState("All");

const categories = ["All", "Food", "Travel", "Shopping", "Bills", "Other"];

const handleSearch = () => {
setAppliedSearch(search.trim().toLowerCase());
setAppliedCategory(category);
};

const filteredExpenses = (Array.isArray(expenses) ? expenses : []).filter((expense) => {
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
    <SearchExpense
      search={search}
      onSearchChange={setSearch}
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