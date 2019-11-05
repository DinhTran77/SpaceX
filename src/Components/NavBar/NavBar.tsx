import React from "react";
import style from "./NavBar.module.css";
import logo from "../../Images/SpaceX_logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarStyle = styled.div`
    .header {
        /* background: pink; */
        height: 4vw;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        /* position: absolute; */
        /* position: relative; */
        /* z-index: 11111111; */
        background: transparent;
        .navbar {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: auto;
            height: 100%;
            /* background: black; */
            /* position: absolute; */
            top: 0;
            padding-right: 4vw;
            /* background: pink; */
            background: transparent;
            a {
                font-size: 1.3vw;
                z-index: 100;
                color: #dfdede;
                text-decoration: none;
                padding-left: 3vw;
                font-family: "Open Sans", sans-serif;
                text-shadow: 0px 0px 7px rgb(0, 0, 0);
                opacity: 0;
                filter: drop-shadow(5px 5px 5px #222);
                animation: fade-in-navBar 0.8s 2s forwards;
            }
        }

        @keyframes fade-in-navBar {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }
    }
`;

const NavBar = () => {
    return (
        <React.Fragment>
            <NavBarStyle>
                <header className="header">
                    <nav className="navbar">
                        <a href="#">Home</a>
                        <a href="#">Rockets</a>
                    </nav>
                </header>
            </NavBarStyle>
        </React.Fragment>
    );
};

export default NavBar;
