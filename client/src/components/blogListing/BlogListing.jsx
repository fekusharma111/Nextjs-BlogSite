import React from "react";
import styles from "./blogListing.module.css";
import Image from "next/image";

const BlogListing = ({ blogs, isTrending, callerName }) => (
  <div className={styles.container}>
    <div className={styles.blogContainer}>
      {blogs.map((blog) => (
        <div key={blog.id} className={styles.item}>
          <Image src={blog.image} alt="" width={200} height={100} />
          <div className={styles.blogContent}>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default BlogListing;

// const BlogListing = ({ blogs, isTrending }) => (
//   <div className={styles.container}>
//     <h2 className={styles.sectionHeader}>{isTrending ? "TRENDING BLOGS" : "ALL BLOGS"}</h2>
//     <div className={styles.blogContainer}>
//       {blogs.map((blog) => (
//         <div key={blog.id} className={styles.item}>
//           <div className={styles.blogContent}>
//             <h3>{blog.title}</h3>
//             <p>{blog.description}</p>
//           </div>
//           <Image src={blog.image} alt="" width={200} height={100} />
//         </div>
//       ))}
//     </div>
//   </div>
// );
