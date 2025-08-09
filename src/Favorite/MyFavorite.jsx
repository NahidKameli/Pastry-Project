import styles from './MyFavorite.module.css'
import Footer from "../Footer/Footer.jsx";
import NavBar from '../Navbar/NavBar.jsx';
import FavoriteCard from '../Popular/FavoriteCard';

function MyFavorite({ like = [] }) {
    return (
        <>
            <div className={styles.Header}>
                <NavBar/>
                <div className={styles.headerFavorite}>
                    <h1>Home <span> / My favorite</span></h1>
                    <p>My Favorites</p>
                </div>
            </div>
            <div className={styles.bodyFavorite}>
                <div className={styles.container}>
                    {like.length ? (
                        like.map(item => (<FavoriteCard key={item.id} data={item} />))
                    ) : (
                        <p style={{ textAlign: "center", fontSize: "20px", padding: "20px", color: "#DBDBDB", margin: "0 auto" }}>No Favorites</p>
                    )}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default MyFavorite