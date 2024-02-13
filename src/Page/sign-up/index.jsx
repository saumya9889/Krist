import React, { useState } from "react";
import SignupImg from "../../assests/image/signup-img.png";

const SignUp = () => {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
    // console.log(e.target.value)
  };
  const handleEmailAddress = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FirstName:", firstName);
    console.log("LastName:", lastName);
    console.log("Email Address", email);
    console.log("Password", password);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    };
  

  return (
    <>
      <div className="container">
        <div className="signup-page">
          <div className="left-side">
            <div>
              <img src={SignupImg} className="w-full h-100%" alt="background" />
            </div>
          </div>
          <div className="right-side">
            <div>
              <h1>Create New Account </h1>
              <h5 style={{ color: "#A4A1AA", lineHeight: "normal" }}>
                Please Enter Details
              </h5>
            </div>
            <div className="input-wrapper">
              <label htmlFor="first name"> First Name </label>
              <input
                onChange={handleFirstName}
                className="input"
                style={{ borderRadius: "6px", border: "1px solid #131118" }}
                type="text"
                value={firstName}
              />
            </div>
            <div className="input-wrapper my-[12px]">
              <label htmlFor="last name"> Last Name </label>
              <input
                onChange={handleLastName}
                className="input"
                style={{ borderRadius: "6px", border: "1px solid #131118" }}
                type="text"
                value={lastName}
              />
            </div>
            <div className="input-wrapper my-[12px]">
              <label htmlFor="Email Address"> Email Address </label>
              <input
                onChange={handleEmailAddress}
                className="input"
                style={{ borderRadius: "6px", border: "1px solid #131118" }}
                type="text"
                value={email}
              />
            </div>
            <div className="input-wrapper my-[12px]">
              <label htmlFor="Password"> Password </label>
              <input
                onChange={handlePassword}
                className="input"
                style={{ borderRadius: "6px", border: "1px solid #131118" }}
                type="text"
                value={password}
              />
            </div>
            <div className="terms cursor-pointer">
              <input className="w-[21px] h-[21px]" type="checkbox" />
              <h6>
                {" "}
                I agree to the <b> Terms & Conditions</b>{" "}
              </h6>
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
                value="SignUp"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
