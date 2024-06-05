import { CategoryModel } from "../model/category.model.js";
import { ExpenseModel } from "../model/expense.model.js";

export const createExpense = async (req, res) => {
  const { description, price, category } = req.body;

  try {
    const expense = new ExpenseModel({
      description,
      price,
      category,
    });

    await expense.save();
    return res
      .status(201)
      .json({ message: "Expense created Successfully.", expense });
  } catch (error) {
    return res.status(500).json({ message: "server Error", error });
  }
};

export const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const category = new CategoryModel({
      name,
    });
    await category.save();
    return res
      .status(201)
      .json({ message: "Category created Successfully.", category });
  } catch (error) {
    return res.status(500).json({ message: "server Error", error });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find({});
    return res.status(200).json({ status: "ok", categories });
  } catch (error) {
    return res.status(404).json({ message: "Categories not found", error });
  }
};

export const getExpenses = async (req, res) => {
  try {
    const expenses = await ExpenseModel.find({}).populate("category");
    return res.status(200).json({ status: "ok", expenses });
  } catch (error) {
    return res.status(404).json({ message: "Expense not found", error });
  }
};
