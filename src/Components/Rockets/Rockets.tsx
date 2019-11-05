import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Rockets.module.css";
import CardRocket from "../CardRocket/CardRocket";
import RocketDetails from "../RocketDetails/RocketDetails";
import Loading from "./../Loading/Loading";
import Card from "./../Card/card/src/components/Card/Card";

const Rockets = () => {
    const [rockets, setRockets] = useState([]);
    const [selectedRocket, setSelectedRocket] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    window.onpopstate = e => {
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
            {Object.getOwnPropertyNames(selectedRocket).length === 0 ? (
                <section className={style.rocketsPageContainer}>
                    {isLoading ? (
                        <Loading></Loading>
                    ) : (
                        rockets.map((item: any) => {
                            return (
                                <React.Fragment>
                                    <div></div>
                                    <Card
                                        product={item.rocket_name}
                                        subtitle="My great idea"
                                        description={item.description}
                                        imgURL={item.flickr_images[0]}
                                        price={9.99}
                                    ></Card>
                                </React.Fragment>

                                // <CardRocket setSelectedRocket={setSelectedRocket} item={item}></CardRocket>
                            );
                        })
                    )}
                </section>
            ) : (
                <RocketDetails
                    selectedRocket={selectedRocket}
                    setSelectedRocket={setSelectedRocket}
                ></RocketDetails>
            )}
        </React.Fragment>
    );
};

export default Rockets;
