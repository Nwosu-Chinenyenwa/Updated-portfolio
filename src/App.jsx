import { useState, useRef } from "react";
import React from "react";
import Load from "../src/component/pages/Load";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Home from "./component/pages/Home";
 import Form from "./component/pages/Form";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Load/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="*" element={<Form/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
