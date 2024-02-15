import React from "react";
import {  Routes, Route } from "react-router-dom";
import Login from "./Page/login";
import SignUp from './Page/sign-up';
import HomePage from './Page/HomePage';




  
function App() {
  return (
    <>
    <Routes> 
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/> 
      <Route path="/" element={<HomePage/>}/> 
    </Routes>
    </>
  );
}

export default App;
