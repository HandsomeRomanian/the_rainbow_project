import "./App.css";
import { useState } from "react";
import Todo from "./components/todo";

function App() {
  var [todos, setTodos] = useState([]);

  const todosList = todos.map((todo) => {
    return Todo(todo);
  });

  return (
    <div className="container">
      <h1> My todos</h1>
      <div id="list-container">{todosList}</div>
      <div class="input-container">
        <input id="input"></input>
        <div class="button" onClick={console.log("test")}>
          Create
        </div>
      </div>
      <div class="button">Clear</div>
    </div>
  );
}

export default App;
