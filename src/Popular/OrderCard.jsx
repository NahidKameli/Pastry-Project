import styles from './PopularCard.module.css';
import { GoHeartFill } from 'react-icons/go'

function OrderCard({ data: { name, image, price } }) {
  return (
      <div className={styles.cards}>
        <img src={image} alt={name} />
        <h5>{name}</h5>
        <p>{price}</p>
        <div className={styles.cart}>
          <button className={styles.Like}>
            <GoHeartFill color="#DB6885" />
          </button>
        </div>
      </div>
  )
}

export default OrderCard