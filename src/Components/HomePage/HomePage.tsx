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

const HomePage = (props: any) => {
    return (
        <React.Fragment>
            <section className={style.contentContainer}>
                <div className={style.heroContainer}>
                    <Hero />

                    {props.isLoading ? (
                        <Loading
                            className={style.loadingAnimation}
                            isLoading={props.isLoading}
                        ></Loading>
                    ) : (
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={style.chevron}
                        />
                    )}
                </div>

                <div className={style.grid}>
                    {props.news.map((item: any) => {
                        return (
                            <CardHistory
                                key={item.id}
                                title={item.title}
                                date={item.event_date_utc}
                                details={item.details}
                                wikiLink={item.links.wikipedia}
                            ></CardHistory>
                        );
                    })}
                </div>
                <Card
                    product="Dinhs Product"
                    subtitle="My great idea"
                    description="Dinh The Falcon 1 was an expendable launch system
            privately developed and manufactured by SpaceX
            during 2006-2009. On 28 September 2008, Falcon 1
            became the first privately-developed liquid-fuel
            launch vehicle to go into orbit around the
            Earth."
                    imgURL="./images/rocket.jpg"
                    price={9.99}
                ></Card>
            </section>
        </React.Fragment>
    );
};

export default HomePage;
