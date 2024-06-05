import app from "./src/app.js";
import { config } from "./src/config/config.js";
import { connectDB } from "./src/db/db.js";
connectDB;

const startServer = () => {
  const port = config.port || 3000;

  connectDB();

  app.listen(port, () => {
    console.log(`listening on port : ${port}`);
  });
};

startServer();
