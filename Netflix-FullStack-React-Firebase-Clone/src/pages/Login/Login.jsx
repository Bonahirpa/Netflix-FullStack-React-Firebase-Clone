// import React from 'react'
import "./Login.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { login, signup } from "../../firebase";
import netflix_spinner from "../../assets/netflix_spinner.gif"


const Login = () => {
  const [signState, setsignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading]=useState(false)

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password)
    }
    setLoading(false);
  }

  return (
    loading?<div className="login-spinner"><img src={netflix_spinner} alt="" /></div>:
    <div className="login">
      <img src={logo} className="login_logo" alt="" />
      <div className="login_form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Your Name"
              name=""
              id=""
            />
          ) : (
            <></>
          )}

          <input
            value={email}
            onChange={(e) => {
             setEmail(e.target.value);
            }}
            type="email"
            placeholder="Your Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />
          <button onClick={user_auth} type="submit">{signState}</button>
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
};

export default Login;
