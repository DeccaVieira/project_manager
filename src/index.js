import dotenv from "dotenv";
dotenv.config();
import router from "./router/index.js"
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});

export default app;