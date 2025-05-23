import styles from './MyFavorite.module.css'
import Footer from "../Footer/Footer.jsx";
import NavBar from '../Navbar/NavBar.jsx';

function MyFavorite() {
    return (
        <>
            <div className={styles.Header}>
                <NavBar/>
                <div className={styles.headerFavorite}>
                    <h1>Home <span> / My favorite</span></h1>
                    <p>My Favorites</p>
                </div>
                {/*  End headerFavorite  */}
            </div>
            {/*  End Header  */}
            <div className={styles.bodyFavorite}>
                <div className={styles.container}>
                </div>
                {/*  End Container  */}
            </div>
            {/*  End BodyFavorite  */}
            <Footer/>
        </>
    )
}

export default MyFavorite