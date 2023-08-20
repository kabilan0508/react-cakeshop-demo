import React, { useState } from "react";
import classes from "./Login.module.css";
import Card from "../UI/Card";
import Developing from "../Components/Developing";

const Login = () => {
  const [isSignup, setisSignup] = useState(false);
  const [isPasswordshow, setisPasswordshow] = useState(false);
  const registerHandler = () => {
    setisSignup(!isSignup);
  };

  return (
    <div className={classes.loginsection}>
      {/* <Developing /> */}
      <Card className={classes.carddesign}>
        <h2>{!isSignup ? `Log in` : `Sign up`}</h2>
        <form className={classes.formdesign}>
          <input type="email" placeholder="Email" />
          <input
            type={isPasswordshow ? `text` : `password`}
            placeholder="Password"
          />
          {isSignup && <input type="password" placeholder="Confirm Password" />}
          {!isSignup && (
            <div
              className={classes.passwordshow}
              onClick={() => setisPasswordshow(!isPasswordshow)}
            >
              {isPasswordshow ? `hide` : `show`}
            </div>
          )}
          {!isSignup && <a href="#">Forget Password</a>}
          <button type="submit">{!isSignup ? `Log in` : `Sign up`}</button>
        </form>
      </Card>
      {!isSignup && (
        <p>
          New User.{" "}
          <a onClick={registerHandler} className={classes.changebutton}>
            Register here
          </a>
        </p>
      )}
      {isSignup && (
        <p>
          Already User.{" "}
          <a onClick={registerHandler} className={classes.changebutton}>
            Login here
          </a>
        </p>
      )}
    </div>
  );
};

export default Login;
