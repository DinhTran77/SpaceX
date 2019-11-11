// import styled components
import styled from "styled-components";

// Import Components
import React from "react";
import NavBar from "../NavBar/NavBar";
import Loading from "../Loading/Loading";
import Card from "../Card/Card";

// Import Font Awesome
// import { FontAwesomeIcon } from "@jest/@fortawesome/react-fontawesome";

// Import Images
import rocket from "./images/rocket.png";
import logo from "./images/logo.svg";
import { Content } from "./HomePageStyles";

const HomePage = (props: any) => {
    return (
        <React.Fragment>
            <Content>
                <main className="container">
                    <section className="hero">
                        <img className="logo" src={logo} alt="logo"></img>
                        <img className="rocket" src={rocket} alt="rocket"></img>
                    </section>
                </main>
            </Content>
        </React.Fragment>
    );
};

export default HomePage;
