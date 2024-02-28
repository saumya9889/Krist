import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Page/login";
import SignUp from "./Page/sign-up";
import HomePage from "./Page/HomePage";
import ProductDetail from "./Page/Product-Detail-Page";

// import Header from "./Components/Home/Header";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/" element={<HomePage />}  */}
        {/* <Route path="/" element={<DefaultHeader />}> */}
          <Route exact path="/productdetail" element={<ProductDetail />} />
          <Route index element={<HomePage />} />
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
