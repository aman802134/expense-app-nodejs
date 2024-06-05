import express from "express";
import {
  createExpense,
  createCategory,
  getExpenses,
  getAllCategories,
} from "../controllers/expense.controller.js";

const expenseRouter = express.Router();

expenseRouter.post("/create-category", createCategory);
expenseRouter.post("/create", createExpense);
expenseRouter.get("/expenses", getExpenses);
expenseRouter.get("/categories", getAllCategories);

export { expenseRouter };
