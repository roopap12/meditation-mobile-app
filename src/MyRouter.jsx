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
      <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<Home />}/>
          <Route path="/Yoga" element={<Yoga />} />
          <Route path="/Meditation" element={<Meditation />} />
          <Route path="/Form" element={<Form />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default MyRouter;