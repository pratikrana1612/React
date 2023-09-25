import React from "react";
import mealImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import CartButton from "./CartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton onClick={props.onCartShow}></CartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="A table full of delicious food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
