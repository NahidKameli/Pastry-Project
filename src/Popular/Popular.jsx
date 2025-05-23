import React, { useState } from 'react'
import styles from "./Popular.module.css";
import PopularCard from './PopularCard';
import { Products } from './Products';


function Popular({ like, setLike, shop, setShop }) {

    const handleLikedList = (favorites, status) => {
        if (status) {
            const newLikedList = like.filter(item => item.id !== favorites.id);
            setLike(newLikedList);
        } else {
            setLike(like=>[...like, favorites]);
        }
    }

    const shoppingHandler = (order, status) => {
        if (status) {
            const newShoppingList = shop.filter(item => item.id !== order.id);
            setShop(newShoppingList);
        } else {
            setShop([...shop, order]);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>Popular Menu</h3>
                <h1>Most Popular Food</h1>
            </div>
            <div className={styles.menu}>
                <div style={{display:"contents"}}>
                    {Products.map((item) => (<PopularCard data={item} key={item.id} handleLikedList={handleLikedList} shoppingHandler={shoppingHandler} />))}
                </div>
            </div>
        </div>
    );
}

export default Popular;
