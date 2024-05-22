import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HelloWorld from "./Hello";
import ListToDoComponents from "./components/ListToDoComponents";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoComponenet from "./components/TodoComponenet";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          //http://localhost:8080
          <Route path="/" element={<ListToDoComponents />}></Route>
          //http:localhost:8080/todos
          <Route path="/todos" element={<ListToDoComponents />}></Route>
          //http:localhost:8080/add-todo
          <Route path="/add-todo" element={<TodoComponenet />}></Route>
          //http:localhost:8080/update-todo/1
          <Route path="/update-todo/:id" element={<TodoComponenet />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
