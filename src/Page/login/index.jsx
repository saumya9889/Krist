import React from "react";
import Logimg from "../../assests/image/logimg.png";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="login-page">
          <div className="left-side">
            <img src={Logimg} alt="Login Logo" />
          </div>
          <div className="right-side">
            <h1>Welcome 👋 </h1>
            <h5 style={{ color: "#A4A1AA", lineHeight: "normal" }}>
              Please Login Here
            </h5>
            <div className="right-side-wrapper">
            <div className="input-wrapper">
              <label> 
                  Email Address 
              </label>
              <input className="input"
                // style={{ borderRadius: "6px", border: "1px solid #131118" }}
                type="email"
              />
              </div>
              <div className="input-wrapper">
              <label>
              {/* style={{ fontSize: ".8rem", lineHeight: "normal" }}
                 */}
                 Password
              </label>
              <input  className="input"
                // style={{
                //   borderRadius: "10px",
                //   fontFamily: "jost",
                //   fontWeight: "400",
                //   border: "1px solid #131118",
                // }}
                type="password"
              />
              </div>
            </div>
            <div className="forgot-pass">
            <div className="remember">
              <input type="checkbox" />
              <h6 >
                Remember Me
              </h6>
              </div>
              <div  className="forgot">
              <h6
                style={{  lineHeight: "normal" }}
                
              >
                Forgot Password?
              </h6>
              </div>
            </div>
            <input
              style={{ borderRadius: "10px", background: "#131118" }}
              className="submit text-white p-5 h-11 justify-center align-middle"
              type="submit"
              value="Login"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
