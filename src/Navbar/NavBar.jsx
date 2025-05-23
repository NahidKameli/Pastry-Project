import styles from "./NavBar.module.css";
import logo from "../assets/logo/Logo.svg";
import {GoHeart} from "react-icons/go";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {IoMenu} from "react-icons/io5";
import {Link} from "react-router-dom";
import { useState } from "react";

function NavBar({count}) {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <img src={logo} alt="Logo"/>
                </div>
                <div className={styles.navbar}>
                    <div className={styles.show}>
                        <button className={styles.cart}><AiOutlineShoppingCart/></button>
                        <div className={styles.menu}><IoMenu/></div>
                    </div>
                    <ul className={styles.item}>
                        <li style={{marginLeft: "2rem"}}><Link to="/Homepage">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/pages">Pages</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li>
                            <Link style={{display:"flex", alignItems:"center"}} to="/favorites">
                                <button style={{backgroundColor: "transparent", position:"relative", color:"red", marginRight:"-15px"}}>
                                    <GoHeart/>
                                    <span>{count}</span>
                                    </button> My Favorites
                            </Link>
                        </li>
                        <li>
                            <Link to="/Cart">
                                <span><AiOutlineShoppingCart/></span> My Cart
                            </Link>
                        </li>
                        <li className={styles.badge}>
                            <button>Contact Us</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
