import React from 'react'
import styles from "./Explore.module.css";
import img52 from "../assets/explore/52.png"
import img50 from "../assets/explore/50.png"
import img53 from "../assets/explore/53.png"
import img54 from "../assets/explore/54.png"
import img51 from "../assets/explore/51.png"
import img55 from "../assets/explore/55.png"

function Explore() {
    return (

        <div className={styles.container}>
            <div className={styles.header}>
                <h3>Explore</h3>
                <h1>Our Delicious Menu</h1>
            </div>
            <div className={styles.cakes}>
                <div>
                    <img src={img52} alt="" />
                        <h4>Cakes</h4>
                        <span>24 Menu</span>
                </div>
                <div>
                    <img src={img50} alt="" />
                        <h4>Cupcakes</h4>
                        <span>25 Menu</span>
                </div>
                <div>
                    <img src={img53} alt="" />
                    <h4>Donuts</h4>
                    <span>35 Menu</span>
                </div>
                <div>
                    <img src={img54} alt="" />
                    <h4>Cookies</h4>
                    <span>24 Menu</span>
                </div>
                <div>
                    <img src={img51} alt="" />
                    <h4>Macarons</h4>
                    <span>25 Menu</span>
                </div>
                <div>
                    <img src={img55} alt="" />
                    <h4>Drinks</h4>
                    <span>22 Menu</span>
                </div>

            </div>
        </div>

    )
}

export default Explore