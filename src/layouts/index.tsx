import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css";

const Layout = ({ children }: any) => {


  return (
    <div className="w-full">
      <BrowserRouter>
        <div className="fixed w-full h-30 z-2000">
          <Header />
        </div>
        <div>{children}</div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Layout;
