import NavBar from '../Navbar/NavBar.jsx';
import styles from './Hero.module.css';
import bg from '../assets/Bg/bg-mobile.svg';
import bgWin from '../assets/Bg/Bg-win.svg';
import donat from '../assets//Bg/donat.svg';
import HeroLeft from "./HeroLeft.jsx";

function Hero() {
    return (
        <>
            <NavBar/>
            <div style={{ position: "relative" }}>

                <div className={styles.hero}>

                    <div className={styles.heroRight}>
                        <img src={donat} alt="donat" className={styles.donat} />
                        <picture>
                            <source srcSet={bgWin} type="image/png" media="(min-width: 768px)" />
                            <source srcSet={bg} type="image/png" media="(max-width: 768px)" />
                            <img alt="banner" src={bgWin} />
                        </picture>
                    </div>

                    <div className={styles.container}>
                        <HeroLeft/>
                    </div>

                </div>
            </div>

        </>

    );
}

export default Hero;
