import React from "react";
import App from "./App";
import Yoga from "./Components/Yoga";
import Meditation from "./Components/Meditation";
import Form from "./Components/Form";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function MyRouter() {
  return (
    <Router>
      <App>
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/Yoga" element={<Yoga />} />
          <Route path="/Meditation" element={<Meditation />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </App>
    </Router>
  );
}

export default MyRouter;