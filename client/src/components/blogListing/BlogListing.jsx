import React from "react";
// import "./blogListing.css";
import Image from "next/image";

const BlogListing = ({ blogs, isTrending, callerName }) => (
  <>
    {blogs.map((blog) => (
      <li key={blog.id} className="card shadow mb-4">
        <div className="row g-0 align-items-center">
          <div className="col-lg-3">
            <Image src={blog.image} alt="" width={200} height={100} className="img-fluid" />
          </div>

          <div className="col-lg-9">
            <div className="p-3">
              <h3 className="fs-5 fw-semibold">{blog.title}</h3>
              <p className="m-0 p-0 fw-light pColor">{blog.description}</p>
            </div>
          </div>
        </div>
      </li>
    ))}
  </>
);

export default BlogListing;
