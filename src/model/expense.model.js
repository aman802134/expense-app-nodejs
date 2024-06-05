import mongoose, { Schema } from "mongoose";

const expenseSchema = new Schema({
  description: {
    type: String,
    required: [true, "description is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
  },
});

export const ExpenseModel = mongoose.model("Expense", expenseSchema);
