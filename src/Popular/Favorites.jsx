import React, { useState } from 'react';
import styles from "./Favorites.module.css";
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import FavoriteCard from './FavoriteCard';

function Favorites({ like = [], setLike }) {
  const removeFavorite = (id) => {
    setLike(like.filter(item => item.id !== id));
  };
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <h3> <a href="">Home</a> / My Favorites</h3>
        <h1 style={{ fontSize: "3rem", fontWeight: "500" }}>My Favorites</h1>
      </div>
      <div>
        {like.length ? (
          like.map(item => (
            <FavoriteCard key={item.id} data={item} onRemove={removeFavorite} />
          ))
        ) : (
          <p>No Favorites</p>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Favorites