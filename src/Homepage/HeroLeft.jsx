import styles from "./HeroLeft.module.css";
import customers from "../assets/Bg/Image.svg";
import {AiFillStar} from "react-icons/ai";
import googleplay from "../assets/App/GooglePlay.svg";
import appstore from "../assets/App/AppStore.svg";


function HeroLeft() {
    
    return (
        <div className={styles.heroLeft}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h4 className={styles.titleFood}>Welcome to Fofood</h4>
                    <h2>Super Delicious Food Special for You</h2>
                    <p>Order your favorites food from anywhere and get delivery at your door </p>
                    <div className={styles.order}>
                        <button className={styles.orderButton}>Order Now</button>
                        <button className={styles.learnButton}>Learn More</button>
                    </div>
                </div>
                <div className={styles.customers}>
                    <img src={customers} alt=""/>
                    <div >
                        <p>Our Happy Customers</p>
                        <p style={{display:"flex",alignItems:"center"}}>
                            <AiFillStar  color={"#FFC107"} fontSize="18px"   />
                            <span >4.9  (12.8k reviews)</span>
                        </p>
                    </div>
                </div>
                <div className={styles.App}>
                    <p>For Better Service Download Our Mobile App Now</p>
                    <div>
                        <span><img src={googleplay} alt=""/></span>
                        <span><img src={appstore} alt=""/></span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeroLeft;