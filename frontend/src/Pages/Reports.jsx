// function Reports({ expenses }) {
//   const total = expenses.reduce(
//     (sum, expense) => sum + Number(expense.amount),
//     0
//   );

//   const categories = ["Food", "Travel", "Shopping", "Bills", "Other"];

//   return (
//     <div className="page">
//       <h1>Expense Reports</h1>

//       <section className="card">
//         <h2>Total Spending</h2>
//         <h1>₹{total.toLocaleString("en-IN")}</h1>
//         <p>{expenses.length} transactions</p>
//       </section>

//       <section className="card">
//         <h2>Category-wise Spending</h2>

//         {categories.map((category) => {
//           const categoryTotal = expenses
//             .filter((expense) => expense.category === category)
//             .reduce((sum, expense) => sum + Number(expense.amount), 0);

//           return (
//             <div className="expense-item" key={category}>
//               <span>{category}</span>
//               <strong>₹{categoryTotal.toLocaleString("en-IN")}</strong>
//             </div>
//           );
//         })}
//       </section>
//     </div>
//   );
// }

// export default Reports;




function Reports({ expenses }) {
const total = expenses.reduce(
(sum, expense) => sum + Number(expense.amount),
0
);

const categories = ["Food", "Travel", "Shopping", "Bills", "Other"];

return (
<div className="page">
<h1>Expense Reports</h1>
<p>Understand where your money goes.</p>

  <section className="card">
    <h2>Total Spending</h2>
    <h1>₹{total.toLocaleString("en-IN")}</h1>
    <p>{expenses.length} transactions</p>
  </section>

  <section className="card">
    <h2>Category-wise Spending</h2>

    {categories.map((category) => {
      const categoryTotal = expenses
        .filter((expense) => expense.category === category)
        .reduce(
          (sum, expense) => sum + Number(expense.amount),
          0
        );

      const percentage =
        total > 0 ? (categoryTotal / total) * 100 : 0;

      return (
        <div className="expense-item" key={category}>
          <div style={{ flex: 1, minWidth: "180px" }}>
            <strong>{category}</strong>
            <p>
              ₹{categoryTotal.toLocaleString("en-IN")} ·{" "}
              {percentage.toFixed(1)}%
            </p>

            <div
              style={{
                height: "10px",
                background: "#e2e8f0",
                borderRadius: "10px",
                overflow: "hidden",
                marginTop: "8px",
              }}
            >
              <div
                style={{
                  width: `${percentage}%`,
                  height: "100%",
                  background: "#2458c6",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </div>
      );
    })}
  </section>
</div>

);
}

export default Reports;