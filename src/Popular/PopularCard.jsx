import React, { useState } from 'react';
import styles from "./PopularCard.module.css";
import { GoHeartFill } from "react-icons/go";

function PopularCard({ data, handleLikedList, shoppingHandler, setLikeCount  }) {

    const { name, image, price } = data;

    const [like, setLike] = useState(false);

    const likeHandler = () => {
        handleLikedList(data, like);
        setLike(like => !like);
        setLikeCount(prevCount => like ? prevCount - 1 : prevCount + 1); // Update like count
    };

    const [order, setOrder] = useState(false);
    const orderHandler = () => {
        shoppingHandler(data, order)
        setOrder(order => !order)
    }

    return (
        <div className={styles.product}>
            <div className={styles.menu}>
                <div>
                    <img src={image} alt={name} />
                    <h3 style={{ cursor: "pointer" }}>{name}</h3>
                    <p>$ {price}</p>
                    <span className={styles.add}>
                        <button className={styles.favorite} onClick={likeHandler}>
                            <GoHeartFill color={like ? "#DB6885" : "e0e0e0"} />
                        </button>
                        <button className={styles.addbutton} style={{ backgroundColor: order ? "#a04e4a" : "#DB6885" }}
                            onClick={orderHandler}>Add to Cart</button>
                    </span>
                </div>
            </div>
        </div>
    )
}


export default PopularCard;

