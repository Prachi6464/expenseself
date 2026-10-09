import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Pages/Navbar";
import Dashboard from "./Pages/Dashboard";
import AllExpenses from "./Pages/AllExpense";
import AddExpense from "./Pages/AddExpense";
import Reports from "./Pages/Reports";

const API_URL = "http://localhost:5000/api/expenses";

function App() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleAddExpense = async (expenseData) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(expenseData),
      });

      if (!response.ok) throw new Error("Expense not added");

      await fetchExpenses();
      alert("Expense successfully added!");
    } catch (error) {
      console.error("Add expense error:", error);
      alert("Expense add nahi hua. Backend check karo.");
    }
  };

  const handleDeleteExpense = async (id) => {
    if (!window.confirm("Do you want to delete this expense?")) return;

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Delete failed");

      await fetchExpenses();
      alert("Expense deleted successfully!");
    } catch (error) {
      console.error("Delete error:", error);
      alert("Expense delete nahi hua.");
    }
  };

  const handleEditExpense = async (expense) => {
    const title = window.prompt("Enter expense title:", expense.title);
    if (title === null || !title.trim()) return;

    const amount = window.prompt("Enter amount:", expense.amount);
    if (amount === null || amount.trim() === "" || Number(amount) <= 0) return;

    const category = window.prompt(
      "Enter category (Food, Travel, Shopping, Bills, Other):",
      expense.category
    );
    if (category === null || !category.trim()) return;

    try {
      const response = await fetch(`${API_URL}/${expense._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          amount: Number(amount),
          category: category.trim(),
        }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Update failed");

      await fetchExpenses();
      alert("Expense updated successfully!");
    } catch (error) {
      console.error("Edit error:", error);
      alert("Expense update nahi hua.");
    }
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route
              path="/"
              element={<Dashboard expenses={expenses} 
              onDeleteExpense={handleDeleteExpense}
                  onEditExpense={handleEditExpense}
              />}
            />

            <Route
              path="/expenses"
              element={
                <AllExpenses
                  expenses={expenses}
                  onDeleteExpense={handleDeleteExpense}
                  onEditExpense={handleEditExpense}
                />
              }
            />

            <Route
              path="/add-expense"
              element={<AddExpense onAddExpense={handleAddExpense} />}
            />

            <Route
              path="/reports"
              element={<Reports expenses={expenses} />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;