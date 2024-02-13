import React, { useState } from "react";
import Logimg from "../../assests/image/logimg.png";
import Logo from "../../assests/image/logo.jpeg";
import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [rememberMe, setRememberMe] = useState("false");
  const navigate = useNavigate();
  // const [otpSent, setOtpSent] = useState(false);

  console.log(navigate, "navigate+++");

  // for handleSubmit the login data
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("RememberMe", rememberMe);
    // for clear form fileds
    setEmail("");
    setPassword("");
  };

  // function to handle login form submission
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    // console.log(e.target.value)
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  //  function for handle remember me checkbox
  const handleRememberMe = () => {
    // we can add logic to handle the "Forgot Password?" action
    // and we could show a modal or navigate to a password recovery page
    setRememberMe(!rememberMe);
  };

  // function for handle forgot password click work
  const handleForgotPassword = (e) => {
    alert("Forgot Password?");
  };
  const handleNavigate = (e) => {
    navigate("/signup");
  };

  // //  function for Forgot pass otp request
  // const handleForgotPassword = async () => {
  //   try {
  //     // Send a request to your backend endpoint to send the OTP
  //     const response = await axios.post("/api/forgotPassword", { email });
  //     console.log(response.data); // Log the response from the backend
  //     setOtpSent(true);
  //   } catch (error) {
  //     console.error("Error sending OTP:", error);
  //   }
  // };
  return (
    <>
      <div className="container">
        <div className="login-page  h-[calc(100vh)]">
          <div className="left-side">
            <div>
              <img src={Logimg} className="w-full" alt="background" />
              <img
                src={Logo}
                className="absolute w-[143px] h-[58px] top-[60px] left-[60px] z-10"
                alt="logo"
                // style={{ width: "12%", height: "40px" }}
              />
            </div>
          </div>
          <div className="right-side flex justify-center items-center h-[75%]">
            <div className="right-content-wrapper">
              <h1>Welcome 👋 </h1>
              <h5 style={{ color: "#A4A1AA", lineHeight: "normal" }}>
                Please Login Here
              </h5>
              <div className="right-side-wrapper">
                <div className="input-wrapper">
                  <label className="block" htmlFor="email address">
                    Email Address
                  </label>
                  <input
                    className="input block"
                    onChange={handleChangeEmail}
                    type="text"
                    value={email}
                  />
                </div>
                <div className="input-wrapper my-[16px]">
                  <label htmlFor="password" className="block">
                    {/* style={{ fontSize: ".8rem", lineHeight: "normal" }}
                     */}
                    Password
                  </label>
                  <input
                    className="input block rounded-sm font-normal border border-[#131118]"
                    onChange={handleChangePass}
                    value={password}
                    type="text"
                    name="password"
                  />
                </div>
              </div>
              <div className="forgot-pass">
                <div className="remember cursor-pointer">
                  <input
                    onChange={handleRememberMe}
                    type="checkbox"
                    checked={rememberMe}
                  />
                  <h6>Remember Me</h6>
                </div>
                <div className="forgot">
                  <h6
                    style={{
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: "500",
                      lineHeight: "normal",
                    }}
                    onClick={handleForgotPassword}
                  >
                    Forgot Password?
                  </h6>
                </div>
              </div>
              <div>
                <input
                  onClick={handleSubmit}
                  style={{
                    cursor: "pointer",
                    borderRadius: "10px",
                    marginTop: "1.5rem",
                    background: "#131118",
                  }}
                  className="input submit text-white  h-11 justify-center align-middle"
                  type="submit"
                  value="Login"
                />
              </div>
              <button
                className=""
                to="/signup"
                onClick={handleNavigate}
                // onClick={() => navigate("/signup")}
              >
                Sigup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
