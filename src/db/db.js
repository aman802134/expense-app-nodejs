import mongoose from "mongoose";
import { config } from "../config/config.js";

export const connectDB = () => {
  try {
    mongoose.connect(config.mongoUrl, { dbName: "expense" });

    const db = mongoose.connection;
    db.on("connected", () => {
      console.log(`Database connected on host ${db.host}`);
    });
    db.on("error", (err) => {
      console.log("Database connection failed", err);
    });
    db.on("disconnected", () => {
      console.log(`Database disconnected `);
    });
  } catch (error) {
    console.log("database connection failed");
  }
};
