import styles from "./Testimonial.module.css";
import { AiFillStar } from "react-icons/ai";
import testimonial from "../assets/testimonial/Testimonial.png"
import customer from "../assets/testimonial/1.svg"


function Testimonial() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.testimonial}>
                    <img src={testimonial} alt="Testimonial Background" className={styles.backgroundImage} />
                    <div className={styles.content}>
                        <h3>Testimonial</h3>
                        <p>What People Say</p>
                        <div className={styles.cardWhite}>
                            <div className={styles.testimonialCard}>
                                <img src={customer} alt="" />
                                <h4>It’s very delicious!</h4>
                                <div className={styles.star}>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet venenatis a
                                    vel id tincidunt volutpat faucibus scelerisque.
                                    Morbi eget turpis aliquet nunc, varius aliquam ipsum. </p>
                            </div>
                        </div>
                        {/*  End CardWhite   */}
                    </div>
                    {/* End Content   */}
                </div>
                {/* End Testimonial   */}
            </div>
        </>
    );
}

export default Testimonial;
