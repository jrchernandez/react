import React from 'react';
import logo from './covid19.jpg';
import './header.css';
export default Header;

function Header() {
    return(
        <div className="Header">
            <h1 align="center"><img src={logo} className="App-logo" alt="logo" />   COVID-19</h1>
        </div>
    )
}