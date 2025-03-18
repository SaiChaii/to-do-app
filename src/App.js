import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AddEmployee from "./AddEmployee";
import ListPage from "./ListPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/add" element={<AddEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
