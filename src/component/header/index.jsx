/* eslint-disable react/no-unescaped-entities */
import React from "react";
import './styles.css';

// const Header = ( {logo, menuItem} ) => {
//     return (
//         <header className="header">
//             <a href="/" className="logo">{logo}</a>
//             <input type="checkbox" className="side-menu" id="side-menu"></input>
//             <label className="hamb" for="side-menu">
//                 <span className="hamb-line"></span>
//             </label>
//             <nav className="nav">
//                 <ul className="menu">
//                     <li><a href="#">Inicio</a></li>
//                     <li><a href="#">Plantas</a></li>
//                     <li><a href="#">Descubre</a></li>
//                     <li><a href="#">Contacto</a></li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }


// export default Header;

const Header = ( {logo, menuItem} ) => {
    return (
        <header className="header">
            <a href="/" className="logo">{logo}</a>
            <input type="checkbox" className="side-menu" id="side-menu"></input>
            <label className="hamb" htmlFor="side-menu">
                <span className="hamb-line"></span>
            </label>
            <nav className="nav">
                <ul className="menu">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                {/* <ul>
                    <img src=".../assets/img/carritoLogo.png" alt="carritoLogo" />
                </ul> */}
            </nav>
        </header>
    )
}


export default Header;

