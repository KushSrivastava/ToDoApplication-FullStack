import React, { useEffect, useState } from "react";
import {
  completeTodo,
  deleteTodo,
  getAllTodos,
  incompletedTodo,
} from "../services/TodoService";
import { useNavigate } from "react-router-dom";

const ListToDoComponents = () => {
  const [todo, setTodo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    listTodos();
  }, []);

  function listTodos() {
    getAllTodos()
      .then((response) => {
        setTodo(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const addNewTodo = () => {
    navigate("/add-todo");
  };

  function updateTodo(id) {
    console.log(id);
    navigate(`/update-todo/${id}`);
  }

  function removeTodo(id) {
    if (deleteTodo(id)) {
      listTodos();
    }
  }

  function markComplete(id) {
    completeTodo(id);
    listTodos();
  }

  function markincomplete(id) {
    incompletedTodo(id);
    listTodos();
  }

  return (
    <div className="container">
      <h2 className="text-center">List of ToDos</h2>
      <button className="btn btn-primary mb-2" onClick={addNewTodo}>
        Add Todo
      </button>
      <div>
        <table className="table table-bordered table-stripped">
          <thead>
            <tr>
              <th>Todo Title</th>
              <th>Todo Description</th>
              <th>Completed</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.completed ? "Yes" : "No"}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => updateTodo(todo.id)}
                  >
                    update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeTodo(todo.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => markComplete(todo.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    complete
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => markincomplete(todo.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    incomplete
                  </button>
                </td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListToDoComponents;
