import React, { useEffect } from "react";
import { useState } from "react";
import { getTodo, saveTodo, updateTodo } from "../services/TodoService";
import { useNavigate, useParams } from "react-router-dom";

const TodoComponenet = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [completed, setcompleted] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const saveorUpdateTodo = (e) => {
    e.preventDefault();
    const todo = { title, description, completed };
    console.log(todo);

    if (id) {
      updateTodo(id, todo);
      navigate("/todos");
    } else {
      saveTodo(todo);
      navigate("/todos");
      /* .then((response) => {
        console.log(response.data);
        navigate("/todos");
      })
      .catch((error) => {
        console.error(error);
      });
      */
    }
  };

  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Update Todo</h2>;
    } else {
      return <h2 className="text-center">Add Todo</h2>;
    }
  }

  /* useEffect(() => {
    if (id) {
      getTodo(id)
        .then((rep) => {
          console.log(rep.data);
          settitle(rep.data.title);
          setdescription(rep.data.description);
          setcompleted(rep.data.completed);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);*/

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 ofset-md-3">
          {pageTitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Todo Titile :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Todo title"
                  name="title"
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Todo Description :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Todo Description"
                  name="title"
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Todo Completed :</label>
                <select
                  className="form-control"
                  value={completed}
                  onChange={(e) => setcompleted(e.target.value)}
                >
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </div>

              <button
                className="btn btn-success"
                onClick={(e) => saveorUpdateTodo(e)}
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoComponenet;
