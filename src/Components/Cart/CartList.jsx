import React from "react";
import classes from "./CartList.module.css";
import img from "../../assets/img/cake.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  increaceQuantity,
  decreaseQuantity,
  deleteCart,
} from "../../App/CartSlice";

const CartList = (props) => {
  const dispatch = useDispatch();
  const addButtonHandler = () => {
    // console.log("hai");
    dispatch(increaceQuantity({ id: props.id }));
  };
  const removeButtonHandler = () => {
    dispatch(decreaseQuantity({ id: props.id }));
  };
  const deleteButtonHandler = () => {
    dispatch(deleteCart({ id: props.id }));
  };

  const totalPrice = props.price * props.quantity;
  return (
    // <div className={classes.cartlist}>
    //   <div className={classes.cartimgcontainer}>
    //     <img src={props.imageUrl} className={classes.cartimg} />
    //   </div>
    //   <div className={classes.productdetail}>
    //     <div className={classes.flexcolumns}>
    //       <h3>{props.productTitle}</h3>
    //       <p>{props.flavor}</p>
    //     </div>
    //     <div className={classes.flexcolumns}>
    //       <p>{`₹ ` + props.price}</p>
    //     </div>
    //     <div className={classes.flexcolumns}>
    //       <FontAwesomeIcon
    //         icon={faTrash}
    //         className={classes.deleteicon}
    //         onClick={deleteButtonHandler}
    //       />
    //     </div>
    //     <div className={classes.incbutton}>
    //       <button onClick={removeButtonHandler}>-</button>
    //       <p>{props.quantity}</p>
    //       <button onClick={addButtonHandler}>+</button>
    //     </div>
    //     <div>
    //       <h4>{`₹ ` + totalPrice.toFixed(2)}</h4>
    //     </div>
    //   </div>
    // </div>
    <div className={classes.cartlist}>
      <div className={classes.itemimagecon}>
        <img src={props.imageUrl} className={classes.itemimg} />
      </div>
      <div className={classes.details}>
        <div className={classes.title}>
          <p>{props.productTitle}</p>
          <span>{props.flavor}</span>
        </div>
        <div>
          <span className={classes.subtitle}>Qty</span>
          <div className={classes.incbutton}>
            <button onClick={removeButtonHandler}>-</button>
            <p>{props.quantity}</p>
            <button onClick={addButtonHandler}>+</button>
          </div>
        </div>
        <div>
          <span className={classes.subtitle}>Price</span>
          <div className={classes.price}>{`₹ ` + props.price}</div>
        </div>
        <div>
          <div className={classes.flexcolumns}>
            <FontAwesomeIcon
              icon={faTrash}
              className={classes.deleteicon}
              onClick={deleteButtonHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
