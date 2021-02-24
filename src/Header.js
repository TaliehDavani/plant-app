import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './assets/images/logo.png';


function Header() {
    return (
        <div className="header">
            <div className="header__line">
                <MenuIcon  className="menuIcon" fontSize="large"/>
            </div>
            <div className="header__top">
                <div className="header__text">
                    <h1>'Plant app!'</h1>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="header__search">
                    <input type="text" placeholder="Search"/>
                    <SearchIcon fontSize="large" className="searchicon"/>
                </div>
            </div>
        </div>
    )
}

export default Header
