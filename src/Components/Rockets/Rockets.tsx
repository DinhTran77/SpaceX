import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Rockets.module.css";
import Loading from "./../Loading/Loading";
import Card from "../Card/Card";

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
            <section className={style.rocketsPageContainer}>
                {isLoading ? (
                    <Loading></Loading>
                ) : (
                    rockets.map((item: any) => {
                        return (
                            <React.Fragment>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <Card
                                                product={item.rocket_name}
                                                subtitle={
                                                    item.payload_weights[0].name
                                                }
                                                description={item.description}
                                                imgURL={item.flickr_images[0]}
                                                price={item.cost_per_launch}
                                            ></Card>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>

                            // <CardRocket setSelectedRocket={setSelectedRocket} item={item}></CardRocket>
                        );
                    })
                )}
            </section>
            ) : )}
        </React.Fragment>
    );
};

export default Rockets;
