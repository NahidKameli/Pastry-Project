import React from 'react';
import styles from "./Blog.module.css";
import { BlogImages } from "../constant/BlogImages.js";
import BlogCard from './BlogCard.jsx';

function Blog() {
  return (
    <div className={styles.container}>
      <div className={styles.blog}>
        <h3>Our Blog</h3>
        <p>Latest Post</p>
        <div className={styles.blogcard}>
          {
            BlogImages.map(card => (<BlogCard key={card.id} data={card} />))
            
          }
        </div>
      </div>
    </div>
  );
}

export default Blog;