
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import styles from "./BlogCard.module.css";


function BlogCard({ data: { img, title } }) {
    return (
      <div className={styles.card}>
        <img src={img} alt={title} />
        <p className={styles.content}>{title}</p>
        <details>
          <summary className={styles.readmore}> Read More <span><MdKeyboardDoubleArrowRight /></span> </summary>
          <p style={{fontSize:"1rem", fontWeight:"500"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, soluta?</p>
        </details>
      </div>
    );
  }
  
  export default BlogCard;