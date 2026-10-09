// const express = require("express");

// const router = express.Router();

// const {
//   getExpenses,
//   addExpense
// } = require("../controllers/expenseController");

// router.get("/", getExpenses);

// router.post("/", addExpense);

// module.exports = router;



const express = require("express");

const router = express.Router();

const {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense
} = require("../controllers/expenseController");

router.get("/", getExpenses);

router.post("/", addExpense);

router.put("/:id", updateExpense);

router.delete("/:id", deleteExpense);

module.exports = router;