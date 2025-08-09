import React from 'react'
import styles from "./FavoriteCard.module.css"
import { GoHeartFill } from 'react-icons/go'

function FavoriteCard({ data: { name, image, price, id }, onRemove }) {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <img src={image} alt={name} />
        <h5>{name}</h5>
        <p>${price}</p>
        <div className={styles.cart}>
          <button style={{border:"0", background:"none"}} className={styles.Like} onClick={() => onRemove && onRemove(id)}>
            <GoHeartFill color="#DB6885" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default FavoriteCard