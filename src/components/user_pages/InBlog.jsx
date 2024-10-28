import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/inblog.css";
import Footer from "./Footer";

const InBlog = () => {
  let [blog, setBlog] = useState({});
  const getData = async () => {
    try {
      let result = await axios({
        url: `https://6715f6d333bc2bfe40bbbcfd.mockapi.io/blog-details/${params.id}`,
        method: "get",
      });
      setBlog(result.data);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const params = useParams();
  useEffect(() => {
    getData();
  }, []);
  return (
    <div id="InBlog">
      <div id="InBlog1">
        <div id="InBlog2">
          <h2 id="topic">{blog.topic}</h2>
          <p id="date">{blog.date}</p>
          <p id="display">{blog.body}</p>
          <h3 class="sub-topic">{blog.topic2}</h3>
          <p id="display">{blog.body2}</p>
          <h3 class="sub-topic">{blog.topic3}</h3>
          <p id="display">{blog.body3}</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default InBlog;
