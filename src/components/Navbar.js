import { useState, useEffect } from "react";
import Button from "./Button";
import logo from "../assets/img/logo.svg"


function Navbar() {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 1020;

  return isMobile ? (
    <header className="container header">
      <div className="header-logo">
        <a>
            <img  width={26} />
        </a>
        
        <span className="header-logo-title">
          ProMed{" "}
        </span>
      </div>
      <Button text="Contact Us"></Button>
    </header>
  ) : (
    <header className="container header">
      <div className="header-logo">
        <img src={logo}  width={36} />
        <span className="header-logo-title">
        MO Craft - Leather craft
        </span>
      </div>

      <ul className="header-nav">
        <li>
          <a href="#catalog">Каталог</a>
        </li>
        <li>
          <a href="">Про нас</a>
        </li>
      </ul>
      <Button text="Напиши нам"></Button>
    </header>
  );
}

export default Navbar;
