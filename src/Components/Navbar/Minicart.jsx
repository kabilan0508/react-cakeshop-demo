import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Minicart.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
const Minicart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cart);
  const deleteItemHandler = (id) => {
    dispatch(deleteCart(id));
  };

  const content = cart.cartItems.map((items) => (
    <div className={classes.minicartitems} key={items.id}>
      <img src={items.image} />
      <div className={classes.minicartitemtitle}>
        <h5>{items.cakeName}</h5>
        <p>{items.quantity} x </p>
        <p>₹{items.price}</p>
      </div>
      <div className={classes.deleteicon}>
        <FontAwesomeIcon
          icon={faTrashCan}
          onClick={() => deleteItemHandler(items.id)}
        />
      </div>
    </div>
  ));

  return (
    <div className={classes.minicart}>
      <div className={classes.minicartcontainer}>{content}</div>
      <div className={classes.minicarttotal}>
        <p>Total</p>
        <p>{`₹ ` + cart.subtotal.toFixed(2)}</p>
      </div>
      <button type="button" className={classes.proceedbutton}>
        Proceed to checkout
      </button>
      <button type="button" className={classes.cartbutton}>
        <NavLink to={"/cart"}>View cart</NavLink>
      </button>
    </div>
  );
};

export default Minicart;
