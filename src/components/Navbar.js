import React, { useState, useEffect } from "react";
import Button from "./Button";
import logo from "../assets/img/logo.svg";
import returnButton from "../assets/img/Expand_left_double.svg"

function Navbar() {
  const [windowDimension, setWindowDimension] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    function handleScroll() {
      if (window.scrollY > 0) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isMobile = windowDimension <= 1020;

  return isMobile ? (
    <header className="container header">
      <div className="header-logo">
        <img src={logo} width={26} alt="Logo" />
        <span className="header-logo-title">MO&Craft</span>
      </div>
      <Button
        text="Напиши нам"
        href="https://linktr.ee/mykolabms?fbclid=IwAR2QkY5twHhM8sxCaaVCwG8PhdH_upFxFDYUDKRGpB5WbXe0q2Fpfr5Zs-I"
      />
      {showScrollButton && (
        <span className="header-return">
          <a href="#catalog">До каталогу <img src={returnButton}/></a>
        </span>
      )}
    </header>
  ) : (
    <header className="container header">
      <div className="header-logo">
        <img src={logo} width={36} alt="Logo" />
        <span className="header-logo-title">MO&Craft - Leather craft</span>
      </div>
      <Button
        text="Напиши нам"
        href="https://linktr.ee/mykolabms?fbclid=IwAR2QkY5twHhM8sxCaaVCwG8PhdH_upFxFDYUDKRGpB5WbXe0q2Fpfr5Zs-I"
      />
      {showScrollButton && (
        <span className="header-return">
          <a href="#catalog">До каталогу</a>
        </span>
      )}
    </header>
  );
}

export default Navbar;
