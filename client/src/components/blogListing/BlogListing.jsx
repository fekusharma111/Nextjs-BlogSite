import React from "react";
import "./blogListing.css";
import Image from "next/image";

const BlogListing = ({ blogs, isTrending, callerName }) => {



  return(


    <div className={isTrending? "trendingContainer":"normalContainer"}>
      {blogs.map((blog) => (
        <div key={blog.id} className={isTrending? "trendingBItem":"normalBItem"}>
          <Image src={blog.image} alt="" width={280} height={180} className={isTrending? "trendingBImage":"normalBImage"}/>
          <div className="blogContent">
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <button className="blog_content_bt">
            <svg stroke="currentColor" fill="#fff" stroke-width="0" viewBox="0 0 512 512" height="24px" width="24px" ><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
</button>
          </div>
        </div>
      ))}
    </div>

);
}

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
