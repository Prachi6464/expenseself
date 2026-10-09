import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        ExpenseTrack
      </NavLink>

      <div className="nav-links">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/expenses">All Expenses</NavLink>
        <NavLink to="/add-expense">Add Expense</NavLink>
        <NavLink to="/reports">Reports</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;