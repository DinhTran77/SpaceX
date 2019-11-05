import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Rockets.module.css";
import Loading from "./../Loading/Loading";
import Card from "../Card/Card";
import styled from "styled-components";
import backgroundSpace from "../HomePage/images/space.jpg";
import { Container, Row, Col } from "react-bootstrap";

const RocketStyles = styled.div`
    .rocketsPageContainer {
        background-image: url(${backgroundSpace});
        background-size: cover;
        font-size: 0.8em;
        width: 100vw;
        height: 100vh;
        overflow: scroll;
        position: absolute;
        top: 0;

        .BootstrapContainer {
            width: 100%;
            height: 100%;
            max-width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            margin: 0;
        }
        /* .column {
            margin: 2vw;
        } */
    }

    .loading {
        width: 10%;
    }
`;

const Rockets = () => {
    const [rockets, setRockets] = useState([]);
    const [selectedRocket, setSelectedRocket] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    window.onpopstate = (e: any) => {
        window.history.go(0);
    };

    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            clearTimeout(loadingTimer);
            axios
                .get("https://api.spacexdata.com/v3/rockets")
                .then(response => {
                    setRockets(response.data);
                    setIsLoading(false);
                })
                .catch(function(error) {
                    console.log(error);
                });
        }, 2000);
    }, []);

    return (
        <React.Fragment>
            <RocketStyles>
                <section className="rocketsPageContainer">
                    <Container className="BootstrapContainer">
                        <Row>
                            {isLoading ? (
                                <Loading></Loading>
                            ) : (
                                rockets.map((item: any) => {
                                    return (
                                        <Col lg={3} className="column">
                                            <Card
                                                product={item.rocket_name}
                                                subtitle={
                                                    item.payload_weights[0].name
                                                }
                                                description={item.description}
                                                imgURL={item.flickr_images[0]}
                                                price={item.cost_per_launch}
                                            ></Card>
                                        </Col>
                                    );
                                })
                            )}
                        </Row>
                    </Container>
                </section>
            </RocketStyles>
        </React.Fragment>
    );
};

export default Rockets;
