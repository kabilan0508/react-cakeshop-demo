import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Minicart from "./Minicart";

const Navbar = () => {
  const [menu, setmenu] = useState(false);
  const cartvalue = useSelector((state) => state.cart);
  const length = cartvalue.cartItems.length;
  const menuHandler = (e) => {
    setmenu(!menu);
  };
  return (
    <Fragment>
      <nav className={`${classes.navbar} ${menu && classes.responsive}`}>
        <button className={classes.menuicon} onClick={menuHandler}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className={classes.layer} onClick={menuHandler}></div>
        {/* <span className={classes.close} onClick={menuHandler}>
          x
        </span> */}
        <ul className={classes.navlist}>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          {/* <li>
            <NavLink to={"/cakes"}>Cakes</NavLink>
          </li> */}
          <li>
            <NavLink to={"/loginorsignup"}>Login</NavLink>
          </li>
          <li className={classes.carticonlist}>
            <span to={"/cart"} className={classes.carticonlink}>
              <FontAwesomeIcon icon={faCartShopping} />
              <div className={classes.cartvalue}>{length}</div>
            </span>
            <div className={classes.miniCart}>
              <Minicart />
            </div>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
