import React from "react";
import {  Routes, Route } from "react-router-dom";
import Login from "./Page/login";
import SignUp from './Page/sign-up';
import Dashboard from './Page/Dashboard';


 
function App() {
  return (
    <>
    <Routes> 
      <Route path="/" element={Login}/>
      <Route path="/signup" element={SignUp}/> 
      <Route path="/dashboard" element={Dashboard}/> 
    </Routes>
    </>
  );
}

export default App;
