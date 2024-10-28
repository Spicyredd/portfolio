import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "../styles/blog.css";
import Footer from "./Footer";

const Blog = () => {
  let [blog, setBlog] = useState([]);
  const getData = async () => {
    try {
      let result = await axios({
        url: "https://6715f6d333bc2bfe40bbbcfd.mockapi.io/blog-details",
        method: "get",
      });
      setBlog(result.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div id="blog">
        <div class="sub-blog">
          <div class="top-blog"></div>
          <div class="in-blog-housing">
            <p class="blog-top">Latest Blog</p>
            <div class="blog-line"></div>
            <div class="in-blog-housing-1">
              {blog.map((value, i) => {
                value.date = value.date.split("T")[0];
                return (
                  <div class="in-blog-housing-2">
                    <div class="in-blog">
                      <h2
                        id="topic"
                        onClick={() => {
                          window.open(`/blog/${value.id}`, "_self");
                        }}
                        class="blog-topic"
                      >
                        {value.topic}
                      </h2>
                      <p id="date">{value.date}</p>
                      <p id="display">{value.display}</p>
                      <div>
                        <button
                          class="read-on"
                          onClick={() => {
                            window.open(`/blog/${value.id}`, "_self");
                          }}
                        >
                          Read On
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
