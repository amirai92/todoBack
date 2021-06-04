import express from "express";
const app = express();
const port = 3000;
import TodosRoutes from "./routes/route.js";

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/todos", TodosRoutes);

app.listen(port, () => {
  console.log("server running");
});
