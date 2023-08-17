import React from "react";
import classes from "./CartTotal.module.css";
import { useSelector } from "react-redux";

const CartTotal = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className={classes.carttotal}>
      <div>
        <h4>Subtotal</h4>
        <p>{`₹ ` + cart.subtotal.toFixed(2)}</p>
      </div>
      <div>
        <h4>Shipping fees</h4>
        <p>{`₹ ` + cart.shippingcharge.toFixed(2)}</p>
      </div>
      <div className={classes.total}>
        <h4>Total</h4>
        <p>{`₹ ` + cart.total.toFixed(2)}</p>
      </div>
      <div>
        <button>Proceed to checkout</button>
      </div>
    </div>
  );
};

export default CartTotal;
