import React from "react";
import classes from "./Cart.module.css";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import { useSelector } from "react-redux";
import Developing from "../Developing";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log("this message from cart");
  const cartItems = cart.cartItems;
  const cartlistcontent =
    cartItems.length == 0 ? (
      <div className={classes.emptycart}>
        <h2>
          <i>Your Cart is Empty</i>
        </h2>
      </div>
    ) : (
      cartItems.map((item) => (
        <CartList
          key={item.id}
          id={item.id}
          productTitle={item.cakeName}
          flavor={item.flavor}
          imageUrl={item.image}
          price={item.price}
          quantity={item.quantity}
        />
      ))
    );
  return (
    <div className={classes.cartsection}>
      <div className={classes.row}>
        <h3>Shopping Cart</h3>
        <span>Continue Shopping</span>
      </div>
      <div className={classes.cartcontainer}>
        <div className={classes.cartlist}>{cartlistcontent}</div>
        <div>
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default Cart;
