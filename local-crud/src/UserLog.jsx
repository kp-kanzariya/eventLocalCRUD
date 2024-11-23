import React, { useState } from "react";
import './App.css'
import { useNavigate } from "react-router-dom";
const UserLog = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
   const nav= useNavigate();

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    localStorage.setItem("userDetails", JSON.stringify(signupData));
      alert("Signup Successful!");
    //   localStorage.clear();
    //   alert("Local storage cleared.");
    //   function getLocalStorageSize() {
    //     let total = 0;
    //     for (let key in localStorage) {
    //       if (localStorage.hasOwnProperty(key)) {
    //         total += (localStorage[key].length + key.length);
    //       }
    //     }
    //     console.log("Local storage used: " + (total / 1024).toFixed(2) + " KB");
    //     return total;
    //   }
    //   getLocalStorageSize();

  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("userDetails"));
    if (
      storedUser &&
      loginData.email === storedUser.email &&
      loginData.password === storedUser.password
    ) {
        alert("Login Successful!"+storedUser.email);

        nav(`/profile/${storedUser.email}`);

        // nav('/profile')
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="bd p-3">
      <div className="wrapper">
        <div className="title-text">
          <div className={`title ${isLoginMode ? "login" : "signup"}`}>
            {isLoginMode ? "Login Form" : "Signup Form"}
          </div>
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input
              type="radio"
              name="slide"
              id="login"
              checked={isLoginMode}
              onChange={() => setIsLoginMode(true)}
            />
            <input
              type="radio"
              name="slide"
              id="signup"
              checked={!isLoginMode}
              onChange={() => setIsLoginMode(false)}
            />
            <label
              htmlFor="login"
              className="slide login"
              onClick={() => setIsLoginMode(true)}
            >
              Login
            </label>
            <label
              htmlFor="signup"
              className="slide signup"
              onClick={() => setIsLoginMode(false)}
            >
              Signup
            </label>
            <div className="slider-tab"></div>
          </div>
          <div className="form-inner">
            {isLoginMode ? (
              <form className="login" onSubmit={handleLoginSubmit}>
                <div className="field">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    required
                  />
                </div>
                <div className="field">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    required
                  />
                </div>
                <div className="pass-link">
                  <a href="#">Forgot password?</a>
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Login" />
                </div>
                <div className="signup-link">
                  Not a member?{" "}
                  <a href="#" onClick={() => setIsLoginMode(false)}>
                    Signup now
                  </a>
                </div>
              </form>
            ) : (
              <form className="signup" onSubmit={handleSignupSubmit}>
                <div className="field">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    value={signupData.email}
                    onChange={handleSignupChange}
                    required
                  />
                </div>
                <div className="field">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={signupData.password}
                    onChange={handleSignupChange}
                    required
                  />
                </div>
                <div className="field">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={signupData.confirmPassword}
                    onChange={handleSignupChange}
                    required
                  />
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Signup" />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLog;
