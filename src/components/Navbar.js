import React, { useState, useEffect } from "react";
import Button from "./partComponents/Button";
import logo from "../assets/img/logo.svg";

function Navbar() {
  const [windowDimension, setWindowDimension] = useState(null);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    function handleScroll() {
      const catalogSection = document.getElementById("catalog");
      if (!catalogSection) return;

      const catalogSectionPosition = catalogSection.offsetTop;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= catalogSectionPosition) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
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

  return (
    <header className={`container header ${showNavbar ? "show" : ""}`}>
      <div className="header-logo">
        <img src={logo} width={isMobile ? 26 : 36} alt="Logo" />
        <span className="header-logo-title">
          {isMobile ? "M&O Craft" : "M&O Craft - Leather craft"}
        </span>
      </div>

      <Button
        text="Напиши нам"
        href="https://linktr.ee/mykolabms?fbclid=IwAR2QkY5twHhM8sxCaaVCwG8PhdH_upFxFDYUDKRGpB5WbXe0q2Fpfr5Zs-I"
      />

      {showNavbar && (
        <span className="header-return">
          <a href="#catalog">До каталогу</a>
        </span>
      )}
    </header>
  );
}

export default Navbar;
