import React, { Fragment } from "react";
import Layout from "../Layout/Layout";
import classes from "./Home.module.css";
import Productcard from "../Components/ProductCard";
import MakeSection from "../Components/MakeSection";

const Home = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <section className={classes.hero}>
          <h1>Welcome to Sweet Delights - Your Ultimate Online Cake Store!</h1>
          <p>
            Indulge in the heavenly world of delectable treats at Sweet
            Delights, your one-stop-shop for all things sweet and delightful!
            Whether it's a special occasion, a heartfelt celebration, or simply
            a craving for something extraordinary, we have the perfect cake to
            make your moments truly memorable.
          </p>
        </section>
      </div>

      <MakeSection />
    </Fragment>
  );
};

export default Home;
