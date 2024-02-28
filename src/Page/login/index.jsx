import React, { useState } from "react";
import Logimg from "../../assests/image/logimg.png";
import Logo from "../../assests/image/logo.png";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const initialValue = {
    email: "",
    password: "",
    rememberMe: false,
    //YHA PE MULTIPLE INPUTS NAME/VALUE LIKH SKTE H
  };
  const [userData, setUserData] = useState("");
  const [formData, setFormData] = useState(initialValue); //hum chahe to initial data yha v likh skte h as a object{}

  const email = "sam@gmail.com";
  const password = "123456";
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(value,"value====++")
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  // console.log(formData, "formData");
  const navigate = useNavigate();

  // for handleSubmit the login data
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(formData); //ye form ke input field ko store krne k liye hai
    setFormData(initialValue); //ye form ke input field ko clear krne k liye hai or isme hm initial value use ki jo upr useState me use ki h

    // debugger //for debugging purpose line ly line check krega code

    if (formData.email === email && formData.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/", { replace: true });
    } else {
      alert("Please enter correct username and password! email:sam@gmail.com , password: 123456");
    }
  };
  console.log(userData, "userdata===");

  const handleForgotPassword = (e) => {
    alert("Forgot Password?");
  };
  const handleNavigate = (e) => {
    navigate("/signup");
  };

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
                    name="email"
                    onChange={handleChange}
                    type="text"
                    // value={email}
                    value={formData.email}
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
                    onChange={handleChange}
                    // value={password}
                    value={formData.password}
                    type="text"
                    name="password"
                  />
                </div>
              </div>
              <div className="forgot-pass">
                <div className="remember cursor-pointer">
                  <input
                    onChange={handleChange}
                    type="checkbox"
                    name="remember"
                    checked={formData.rememberMe}
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
                style={{
                  cursor: "pointer",
                  borderRadius: "10px",
                  marginTop: "1.5rem",
                  background: "#131118",
                }}
                className="button  text-white   justify-center align-middle"
                to="/signup"
                onClick={handleNavigate}
                // onClick={() => navigate("/signup")}
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

// function to handle login form submission
// const handleChangeEmail = (e) => {
//   setEmail(e.target.value);
//   // console.log(e.target.value)
// };

// const handleChangePass = (e) => {
//   setPassword(e.target.value);
// };

//  function for handle remember me checkbox
// const handleRememberMe = () => {
//   // we can add logic to handle the "Forgot Password?" action
//   // and we could show a modal or navigate to a password recovery page
//   setRememberMe(!rememberMe);
// };

// function for handle forgot password click work

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
