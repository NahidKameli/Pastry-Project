import React, { useState } from 'react';
import styles from "./Carts.module.css";
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import Order from './Order';

function Carts({ shop }) {

    const [carts, setCarts] = useState(shop);
    const removeItem = (id) => {
        setCarts(carts.filter(cart => cart.id !== id));
    };

    const total = carts.reduce((acc, item) => {
        const itemPrice = parseFloat(item.Price.split(" ")[0].replace(",", ".").replace(/[^\d.]/g, ""));
        return acc + (itemPrice * item.count);
    }, 0);

    return (
        <>
            <NavBar />
            <div>
                <div className={styles.container}>
                    <h3><a href="">Home</a> / My Cart</h3>
                    <h1 style={{fontSize:"3rem",fontWeight:"600"}}>My Cart</h1>
                </div>
                <div className={styles.box}>
                    <table className={styles.tableCart}>
                        <thead>
                            <tr>
                                <th style={{ textAlign: "left" }}>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts.length ? (carts.map(product => (<Order key={product.id} data={product} removeItem={removeItem} />))
                            ) : (
                                <tr>
                                    <td colSpan="5" style={{ textAlign: "center",paddingTop:"20px" }}>No items in cart</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <hr style={{ width: "100%" }} />
                    <div style={{ width: "100%" }}>
                        <div style={{ width: "100%", display: "flex", gap: "140px", alignItems: "center" }}>
                            <div style={{ display: "flex", flexDirection: "column", flex: "1 1 0" }}>
                                <h3>Coupon</h3>
                                <div style={{ display: "flex", margin: "6px 0" }}>
                                    <input type="text" placeholder="Coupon Code" className={styles.coupon} 
                                    style={{ backgroundColor: "#FFF4F5", padding: "10px 0px", borderRadius: "50px", color: "#2F3137", fontSize: "20px", margin: "5px", border: "none", outline: "none" }} />
                                    <button
                                        style={{
                                            backgroundColor: "#DB6885", padding: "10px 20px", borderRadius: "50px", color: "white", fontSize: "12px", margin: "5px", border: "none", outline: "none"
                                        }}>Apply Coupon</button>
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: "1 1 0" }}>
                                <div style={{ display: "flex", gap: "70px", justifyContent: "space-around" }}>
                                    <span>Subtotal</span>
                                    <span style={{ color: "#DB6885", fontWeight: "bold" }}>{total.toFixed(2)}</span>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <div style={{ display: "flex", gap: "70px", justifyContent: "space-around", margin: "1rem 0" }}>
                                        <span>Total</span>
                                        <span style={{ color: "#DB6885", fontWeight: "bold" }}>{total.toFixed(2)}</span>
                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        <button style={{ backgroundColor: "#DB6885", padding: "10px 0", borderRadius: "15px", color: "white", width: "80%", border: "none", outline: "none" }}>
                                            Checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Carts;
