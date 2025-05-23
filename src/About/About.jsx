import React from 'react'
import styles from "./About.module.css";
import image1 from "../assets/about/Image.png"
import image2 from "../assets/about/Images.png"

function About() {
    return (
        <div className={styles.container}>
            <div className={styles.images}>
                <img className={styles.imgone} src={image1} alt="" />
                <img src={image2} alt="" />
            </div>
            <div className={styles.content}>
                <h3>About us</h3>
                <h1>Welcome to Fofood</h1>
                <p>Welcome to Fofood, where we're committed to combating food deserts.
                    Our goal is to ensure everyone has access to fresh, healthy,
                    and affordable food, regardless of their location. Join us in creating a brighter future for all.
                </p>
                <button>Read More</button>
            </div>
        </div>
    )
}

export default About