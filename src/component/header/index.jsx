/* eslint-disable react/no-unescaped-entities */
import React from "react";
import './styles.css';
import carrito from '../../assets/img/carritoLogo.png'


const Header = ({ logo, menuItem }) => {
    return (
        <header className="header">
            <a href="/" className="logo">{logo}</a>
            <input type="checkbox" className="side-menu" id="side-menu"></input>
            <label className="hamb" htmlFor="side-menu">
                <span className="hamb-line"></span>
            </label>
            <nav className="nav">
                <ul className="menu">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Plantas</a></li>
                    <li><a href="#">Descubre</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><img src={carrito} alt="carritoLogo" className="carrito"/></li>
                </ul>
            </nav>
        </header>
    )
}


export default Header;

