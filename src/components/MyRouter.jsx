import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./user_pages/Home";
import About from "./user_pages/About";
import Blog from "./user_pages/Blog";

const MyRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
      </Routes>
    </div>
  );
};

export default MyRouter;
