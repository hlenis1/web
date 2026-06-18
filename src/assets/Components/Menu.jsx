import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-text">StylePC</span>
      </div>
      <ul className="menu">
        <li>Contactos</li>
        <li>Servicios</li>
        <li className="buy-btn">Comprar Ahora</li>
      </ul>
    
    </nav>
  );
}
