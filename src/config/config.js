import { config as conf } from "dotenv";
conf();

export const _config = {
  port: process.env.PORT,
  mongoUrl: process.env.MONGOOSE_URI,
};

export const config = Object.freeze(_config);
