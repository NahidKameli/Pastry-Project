import styles from './Footer.module.css';
import footer from "../assets/footer/bg.png"
import logo from "../assets/logo/LogoWhite.svg";
import {HiOutlineMail} from "react-icons/hi";
import {LuPhone} from "react-icons/lu";
import {FaRegClock} from "react-icons/fa6";
import {AiOutlineInstagram, AiOutlineWhatsApp} from "react-icons/ai";
import {TiSocialFacebook} from "react-icons/ti";
import googleApp from "../assets/App/GooglePlay.svg"
import AppStore from "../assets/App/AppStore.svg"

function Footer() {
    return (

        <div className={styles.footer}>
            <img src={footer} alt="FooterImage" className={styles.backgroundImage}/>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Newsletter Subscribe</h2>
                    <div className={styles.form}>
                        <input type="email" className={styles.input} placeholder="Email Address"/>
                        <button className={styles.button}>subscribe Now</button>
                    </div>
                </div>
                <hr/>
                <div className={styles.logo}>
                    <a href=""><img src={logo} alt="logo"/></a>
                </div>
                <div className={styles.footerRow}>
                    <div className={styles.footerColRow}>
                        <ul>
                            <li>
                                <span><HiOutlineMail width="20px" height="20px"/></span>
                                <span>Email Us:</span>
                                <span>naanaak87@gmail.com</span>
                            </li>
                            <li>
                                <span><LuPhone width="20px" height="20px"/></span>
                                <span>Call:</span>
                                <span>0921227</span>
                            </li>
                            <li>
                                <span><FaRegClock width="20px" height="20px"/></span>
                                <span style={{fontSize: "10px"}}>Working Hours :</span>
                                <span style={{fontSize: "10px"}}> Saturday - Wednesday, 08 am - 04 pm</span>
                            </li>
                            <li className={styles.social}>
                                <a href=""><TiSocialFacebook/></a>
                                <a href=""><AiOutlineInstagram/></a>
                                <a href=""><AiOutlineWhatsApp/></a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footerCol}>
                        <h1>Quick Links 1</h1>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Menu</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerCol}>
                        <h1>Quick Links 2</h1>
                        <ul>
                            <li><a href="">my favorite</a></li>
                            <li><a href="">my Cart</a></li>
                            <li><a href="">Login</a></li>
                            <li><a href="">Pages</a></li>

                        </ul>
                    </div>
                    <div className={styles.footerCol}>
                        <h1 style={{fontSize:"16px", paddingBottom:"40px"}}>download our App</h1>
                        <ul>
                            <li><a href=""><img src={googleApp} alt=""/></a></li>
                            <li><a href=""><img src={AppStore} alt=""/></a></li>

                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
            <p className={styles.CopyRight}>Copyright <b>Banana Studio</b> 2022 All Right Reserved</p>
        </div>
    )
}

export default Footer