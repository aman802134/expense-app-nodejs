import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, "category name required"],
  },
});

export const CategoryModel = model("Category", categorySchema);
