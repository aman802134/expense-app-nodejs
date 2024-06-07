import { Schema, model } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "category name required"],
    },
  },
  {
    timestamps: true,
  }
);

export const CategoryModel = model("Category", categorySchema);
