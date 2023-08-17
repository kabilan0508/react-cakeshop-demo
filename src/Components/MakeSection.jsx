import React from "react";
import classes from "./MakeSection.module.css";
import { useSelector } from "react-redux";
import ProductCard from "./Productcard";

const MakeSection = () => {
  const stock = useSelector((state) => state.cakestock);
  const cakestock = stock.cakes;
  console.log(cakestock);
  const content = cakestock.map((item) => (
    <ProductCard
      key={item.id}
      id={item.id}
      cakeName={item.cakeName}
      flavor={item.flavor}
      price={item.price}
      imageUrl={item.image}
    />
  ));
  return (
    <section className={classes.makesection}>
      <h2>What We Make</h2>
      <div className={`${classes.makecontainer} ${classes.grid}`}>
        {content}
      </div>
    </section>
  );
};

export default MakeSection;
