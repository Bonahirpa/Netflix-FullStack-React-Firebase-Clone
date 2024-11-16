// import React from 'react'
import "./Login.css"
import logo from "../../assets/logo.png"
import { useState } from "react";
const Login = () => {

  const[signState, setsignState]=useState("Sign In")




  return (
    <div className="login">
      <img src={logo} className="login_logo" alt="" />
      <div className="login_form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" &&
            (<input type="text" placeholder="Your Name" name="" id="" /> || (
              <></>
            ))}

          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Password" />
          <button>{signState}</button>
          <div className="form_help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
              <p>Need Help?</p>
            </div>
          </div>
        </form>
        <div className="form_switch">
          {(signState === "Sign Up" && (
            <p>
              Already have account?{" "}
              <span
                onClick={() => {
                  setsignState("Sign In");
                }}
              >
                Sign In Now
              </span>
            </p>
          )) || (
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => {
                  setsignState("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login
