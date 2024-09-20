import express from "express";
import cors from "cors";
import { expenseRouter } from "./routes/expenseRoute.js";
import { userRouter } from "./routes/userRoute.js";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "this is my expense server" });
});

app.use("/api/users", userRouter);
app.use("/api/expense", expenseRouter);

export default app;
