import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login";

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default App;
