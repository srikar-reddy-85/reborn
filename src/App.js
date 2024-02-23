import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Treatment from "./routes/Treatment";
import Resource from "./routes/Resource";
import Getdemo from "./routes/Getdemo";
import Enroll from "./routes/Enroll";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Treatment" element={<Treatment />}></Route>
        <Route path="/Resource" element={<Resource />}></Route>
        <Route path="/Getdemo" element={<Getdemo />}></Route>
        <Route path="/Enroll" element={<Enroll />}></Route>
      </Routes>


    </>
  );
}

export default App;
