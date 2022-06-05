import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../views/examples/Home";
import About from "../../views/examples/About";
import "./Content.css";

const Content = (props) => {
  return (
    <main className="Content">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        {/*
        <Route path="/param/:id" element={<Param />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </main>
  );
};

export default Content;
