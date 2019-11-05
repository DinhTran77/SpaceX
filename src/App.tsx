import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect, Router } from "react-router-dom";
import axios from "axios";
import "normalize.css";
import style from "./App.module.css";
import { interpreterDirective } from "@babel/types";
import HomePage from "./Components/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";
import Rockets from "./Components/Rockets/Rockets";
import About from "./Components/About/About";
// import Card from "./Components/Card/card";
import styled from "styled-components";

//import Bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";

const Container = styled.div`
    .pageContainer {
        display: flex;
        flex-direction: column;
        height: 100vh;
        /* background: blue; */
        width: 100%;
    }

    .content {
        display: relative;
        overflow: hidden;
        height: 100%;
        width: 100%;
    }
`;

const App: React.FC = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            clearTimeout(loadingTimer);
            axios
                .get("https://api.spacexdata.com/v3/history")
                .then(response => {
                    console.log(response.data);
                    setNews(response.data);
                    setIsLoading(false);
                })
                .catch(function(error) {
                    // handle error
                    console.log(error);
                });
        }, 2000);
    }, []);

    return (
        <React.Fragment>
            <Container>
                <section className="pageContainer">
                    <NavBar></NavBar>
                    <section className="content">
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={props => (
                                    <HomePage
                                        isLoading={isLoading}
                                        news={news}
                                    />
                                )}
                            />
                            <Route
                                exact
                                path="/rockets"
                                render={props => <Rockets />}
                            />
                        </Switch>
                    </section>
                </section>
            </Container>
        </React.Fragment>
    );
};

export default App;
