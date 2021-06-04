import data from "../data.js";

//@desc Fetch all todos
//@route GET /todos
//@access Public
const getTodos = (req, res) => {
  res.json(data);
};

//@desc Fetch todo
//@route GET /todos/:id
//@access Public
const getTodoById = (req, res) => {
  const todo = data.find((todo) => todo.id === +req.params.id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404);
  }
};
//@desc CREATE todo
//@route POST /todo
//@access Public
const createTodo = (req, res) => {
  console.log(req.body);
  const newTodo = {
    id: req.body.id,
    title: req.body.title,
    completed: req.body.completed,
  };
  if (!newTodo.title) {
    return res.status(400).json({ message: "Please enter a title" });
  }
  res.status(201);
  data.push(newTodo);
  res.send(data);
};

//@desc Delete todo
//@route DELETE /todos/:id
//@access Public
const deleteTodo = (req, res) => {
  const index = data.findIndex((data) => data.id === +req.params.id);
  if (index) {
    data.splice(index, 1);
    res.json("Todo Deleted");
  } else {
    return res
      .status(400)
      .json({ message: `Could not find the id of ${req.params.id}` });
  }
};

//@desc Fetch all todos
//@route PUT /todo/:id
//@access Public
const updateTodo = (req, res) => {
  const todo = data.find((todo) => todo.id === +req.params.id);
  if (todo) {
    todo.title = req.body.title || todo.title;
    todo.completed = true;
    res.json({
      title: todo.title,
      completed: todo.completed,
    });
  } else {
    res.status(404);
  }
};

export { getTodos, getTodoById, createTodo, deleteTodo, updateTodo };
