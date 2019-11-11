import React from "react";
import style from "./NavBar.module.css";
import logo from "../../Images/SpaceX_logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavBarStyle } from "./NavBarStyles";

const NavBar = () => {
    return (
        <React.Fragment>
            <NavBarStyle>
                <header className="header">
                    <nav className="navbar">
                        <Link to="/">Tran</Link>
                        <Link to="/rockets">Rockets</Link>
                    </nav>
                </header>
            </NavBarStyle>
        </React.Fragment>
    );
};

export default NavBar;
