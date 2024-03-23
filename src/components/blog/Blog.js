import React from "react";
import Blogimg from "./img/blogImg.jpg";
import SubheaderImg from "../about/SubheaderImg";
import "./Blog.css";
import BlogDtls from "./BlogDtls";
function Blog() {
  return (
    <section className="blog-area">
      <SubheaderImg img={Blogimg} />
      <BlogDtls />
    </section>
  );
}

export default Blog;
