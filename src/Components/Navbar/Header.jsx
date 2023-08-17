import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/img/logo.png";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} className={classes.logo} />
      {/* <div className={classes.searchbar}> */}
      {/* <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={classes.searchicon}
        />
        <input type="text" placeholder="Search"></input>
      </div> */}
      <div className={classes.navbar}>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
