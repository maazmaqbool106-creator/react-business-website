import { useState } from "react";
import Logo from "../assets/Logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <img src={Logo} alt="MSICS Logo" className="logo" />

      <button 
        className={`nav-toggle ${isOpen ? "active" : ""}`} 
        onClick={() => setIsOpen(!isOpen)} 
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        <li><a href="#mission" onClick={() => setIsOpen(false)}>Mission</a></li>
        <li><a href="#products" onClick={() => setIsOpen(false)}>Products</a></li>
        <li><a href="#partners" onClick={() => setIsOpen(false)}>Partners</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
