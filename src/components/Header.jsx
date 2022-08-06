import React, { useState } from 'react';
import '@styles/Header.scss';

import logo from "@logos/logo_yard_sale.svg";
import menu from "@icons/icon_menu.svg";
import shopping_cart from "@icons/icon_shopping_cart.svg";
import Menu from './Menu';
const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle)
        console.log("Clicked!!! "+ toggle);
    }
    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle} >platzi@example.com</li>
                    <li className="navbar-shopping-cart">
                        <img src={shopping_cart} alt="shopping cart" />
                        <div>2</div>
                    </li>
                </ul>
                {toggle ? <Menu/> : ""}
            </div>
        </nav>

    );
}
export default Header;
