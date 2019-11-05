import React from "react";
import Header from "../Header/Header";
import style from "./HomePage.module.css";
import CardHistory from "../CardHistory/Card";
import Hero from "../Hero/Hero";
import NavBar from "../NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Loading from "../Loading/Loading";
import Card from "../Card/card/src/components/Card/Card";
import styled from "styled-components";
// import images
import backgroundSpace from "./images/space.jpg";
import rocket from "./images/rocket.png";
import logo from "./images/logo.svg";

const Content = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    background-image: url(${backgroundSpace});
    background-size: cover;
    .navbar {
        display: flex;
        justify-content: flex-end;
        width: auto;
        margin-right: 2vw;
        a {
            font-size: 1.3vw;
            z-index: 100;
            color: #dfdede;
            text-decoration: none;
            margin: 2vw 2vw;
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

    .hero {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        overflow: hidden;

        .logo {
            width: 32%;
            z-index: 10;
            filter: drop-shadow(0px 0px 25px rgba(255, 255, 255, 1));
            opacity: 0;
            animation: fade-in-logo 2s 0.4s forwards;
        }

        @keyframes fade-in-logo {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }

        .rocket {
            width: 20vw;
            z-index: 9;
            position: absolute;
            top: 47vw;
            animation: move-in-rocket 0.3s 1.2s forwards ease-in;
            overflow: hidden;
        }

        @keyframes move-in-rocket {
            from {
                top: 47vw;
            }
            to {
                top: 4vw;
            }
        }
    }
`;
const HomePage = (props: any) => {
    return (
        <Content>
            <main className="container">
                <header className="header">
                    <nav className="navbar">
                        <a href="#">Home</a>
                        <a href="#">Rockets</a>
                    </nav>
                </header>

                <section className="hero">
                    <img className="logo" src={logo} alt="logo"></img>
                    <img className="rocket" src={rocket} alt="rocket"></img>
                </section>
            </main>
        </Content>
    );
};

export default HomePage;
