import React from "react";
import classes from "./ProductCard.module.css";
import { useDispatch } from "react-redux";
import { addCart } from "../App/CartSlice";
// import img from "../assets/img/1.jpg";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const addCartHandler = () => {
    dispatch(
      addCart({
        id: props.id,
        cakeName: props.cakeName,
        flavor: props.flavor,
        price: props.price,
        quantity: 1,
        image: props.imageUrl,
      })
    );
  };
  return (
    <div className={classes.productcard}>
      {/* <FontAwesomeIcon icon={faHeart} className={classes.hearticon} /> */}
      {/* <div className={classes.cartimagecontainer}> */}
      <img src={props.imageUrl} className={classes.cardimage} />
      {/* </div> */}
      <div className={classes.productdescription}>
        {/* <div className={classes.titlecontainer}> */}
        <h3>{props.cakeName} </h3>
        {/* </div> */}
        <p>{`₹ ` + props.price}</p>
        <button onClick={addCartHandler}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
