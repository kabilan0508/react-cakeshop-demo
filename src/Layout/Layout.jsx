import React, { Fragment } from "react";
import Header from "../Components/Navbar/Header";
import Footer from "../Components/Footer";
import classes from "./Layout.module.css";
const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <div className={`${props.className} ${classes.main}`}>
        {props.children}
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
