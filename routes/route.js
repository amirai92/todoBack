import express from "express";
const router = express.Router();

import {
  getTodos,
  createTodo,
  getTodoById,
  deleteTodo,
  updateTodo,
} from "../controllers/todoController.js";

router.route("/").get(getTodos).post(createTodo);
router.route("/:id").get(getTodoById).delete(deleteTodo).put(updateTodo);

export default router;
/*
REST API 
GET /todos
Get todos list

GET /todos/:id
Get a specific todo

POST /todos
Add a new todo

PUT /todos/:id
Update existing todo

DELETE /todos/:id
Delete existing todo
*/
