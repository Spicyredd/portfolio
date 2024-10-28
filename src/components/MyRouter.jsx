import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./user_pages/Blog";
import Home from "./user_pages/Home";
import Resume from "./user_pages/Resume";
import InBlog from "./user_pages/InBlog";

const MyRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/resume" element={<Resume></Resume>}></Route>
        <Route path="/blog/:id" element={<InBlog></InBlog>}></Route>
      </Routes>
    </div>
  );
};

export default MyRouter;
