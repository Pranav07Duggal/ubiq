// import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import LoginPage from "./components/auth/auth";
import BootUp from "./components/bootUp/BootUp";
import { useState } from "react";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);


  return (
    <>
    <BootUp/>
      {isLoggedIn?
        <Home/>:
        <LoginPage setIsLoggedIn= {setIsLoggedIn}/>
      }

    </>
  );
};

export default App;
