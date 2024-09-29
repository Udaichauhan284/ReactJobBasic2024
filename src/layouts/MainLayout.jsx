import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";

//now importing the react toastify, which tell
//when we redicret to main page after deleting the job
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default MainLayout;
