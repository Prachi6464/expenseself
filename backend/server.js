const express = require("express");
const cors = require("cors");
require("dotenv").config();
const expenseRoutes = require("./routes/expenseRoutes");
const connectDB = require("./db")

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/expenses",expenseRoutes);
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Expense Tracker Backend is Running");
});

// connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




// expense api get

// app.get("/api/expenses", (req, res) => {
//   res.json([
//     {
//       title: "Lunch",
//       amount: 250,
//       category: "Food"
//     },
//     {
//       title: "Bus",
//       amount: 50,
//       category: "Travel"
//     }
//   ]);
// });

// // post
// app.post("/api/expenses", (req, res) => {
//   const { title, amount, category } = req.body;

//   res.json({
//     message: "Expense added successfully",
//     expense: {
//       title,
//       amount,
//       category
//     }
//   });
// });


