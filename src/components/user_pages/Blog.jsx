import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Blog = () => {
  let [blog, setBlog] = useState([])
  const getData = async () => {
    try{
      let result = await axios({
        url: "https://6715f6d333bc2bfe40bbbcfd.mockapi.io/blog-details",
        method: "get",
      })
      setBlog(result.data)
    }
    catch (error){
      toast.error(error.message)
    }
  }

  useEffect(() => {
    getData();
  },[])
  return (
    <div>
      {blog.map((value, i) => {
        return (
          <div>
            <div>
            <h2>{value.topic}</h2>
            <h3>{value.date}</h3>
            </div>
            <div>
            <button></button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Blog
