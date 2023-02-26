import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";

import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
    const cartCtx = useContext(CartContext);
    //now headerCart Button component will be reevaluated by react whenever we context changes

    const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0); //reduce is a built in method which allows us to transform the array of data into a single value
    //currentNumber will be the result of the previous execution and here 0 is the initial value of the currentnumber
    const { items } = cartCtx;
    const buttonClasses = `${styles.button} ${
        btnIsHighLighted ? styles.bump : ""
    }`;
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighLighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighLighted(false);
        }, 300);

        return()=>{
            clearTimeout(timer)
        }
    }, [items]);
    return (
        <button className={buttonClasses} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>YourCart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
