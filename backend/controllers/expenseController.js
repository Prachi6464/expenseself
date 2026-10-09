


// const Expense = require("../models/Expense");

// const getExpenses = async (req, res) => {
//   try {
//     const expenses = await Expense.find().sort({ createdAt: -1 });
//     res.json(expenses);
//   } catch (error) {
//     res.status(500).json({
//       message: "Failed to fetch expenses"
//     });
//   }
// };

// const addExpense = async (req, res) => {
//   try {
//     const { title, amount, category, date, description } = req.body;
// console.log("POST BODY :", req.body);
//     const expense = await Expense.create({
//       title,
//       amount,
//       category,
//       date,
//       description
//     });

//     res.status(201).json({
//       message: "Expense added successfully",
//       expense
//     });
//   } 
//   catch (error) {
//   console.log("Add Expense Error:", error);
//   res.status(500).json({
//     message: "Failed to add expense",
//     error: error.message
//   });
// }
// };

// module.exports = {
//   getExpenses,
//   addExpense
// };





const Expense = require("../models/Expense");

// Get all expenses
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ createdAt: -1 });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch expenses"
    });
  }
};

// Add expense
const addExpense = async (req, res) => {
  try {
    const { title, amount, category, date, description } = req.body;

    const expense = await Expense.create({
      title,
      amount,
      category,
      date,
      description
    });

    res.status(201).json({
      message: "Expense added successfully",
      expense
    });
  } catch (error) {
    console.log("Add Expense Error:", error);
    res.status(500).json({
      message: "Failed to add expense",
      error: error.message
    });
  }
};

// Update expense
const updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found"
      });
    }

    res.json({
      message: "Expense updated successfully",
      expense
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update expense",
      error: error.message
    });
  }
};

// Delete expense
const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found"
      });
    }

    res.json({
      message: "Expense deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete expense",
      error: error.message
    });
  }
};

module.exports = {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense
};