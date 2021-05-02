import React from "react";
const blogs = [
  {
    name: "Coming Soon...",
  },
];
const Blog = () => {
  return (
    <div className="my-4 py-4" style={{ background: "#eee" }}>
      <h2 className="text-center pb-4 text-uppercase heading">Blogs</h2>
      <h5 className="text-center">{blogs[0].name}</h5>
    </div>
  );
};

export default Blog;
