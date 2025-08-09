import styles from './Carts.module.css';
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";

function Order({ data, removeItem, updateCount }) {
    const { name, image, price, id, count: initialCount } = data;
    const [count, setCount] = useState(initialCount || 1);
    const decrementHandler = () => {
        if (count > 1) {
            setCount(prev => {
                const newCount = prev - 1;
                updateCount(id, newCount);
                return newCount;
            });
        }
    };
    const incrementHandler = () => {
        setCount(prev => {
            const newCount = prev + 1;
            updateCount(id, newCount);
            return newCount;
        });
    };
    const parsedPrice = parseFloat(price);
    const total = (parsedPrice * count).toFixed(2);
    return (
        <tr className={styles.infoProduct}>
            <td className={styles.product}>
                <img src={image} alt={name} />
                <span>{name}</span>
            </td>
            <td>
                <div className={styles.quantity}>
                    <button className={styles.quantityValue} onClick={decrementHandler}>-</button>
                    <p className={styles.quantityValue} style={{ borderRadius: "0", padding: "0 10px" }}>{count}</p>
                    <button className={styles.quantityValue} style={{ borderRadius: "0 4px 4px 0" }} onClick={incrementHandler}>+</button>
                </div>
            </td>
            <td className={styles.price}>{price}</td>
            <td className={styles.price}>{total}</td>
            <td>
                <button className={styles.delete} onClick={() => removeItem(id)}>
                    <AiFillDelete color="red" fontSize="20px" />
                </button>
            </td>
        </tr>
    );
}

export default Order;
