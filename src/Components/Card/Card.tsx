import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";

// import { FontAwesomeIcon } from "@jest/@fortawesome/react-fontawesome";
// import {
//     faShoppingCart,
//     faGreaterThanEqual
// } from "@jest/@fortawesome/free-solid-svg-icons";
// import { faHeart } from "@jest/@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { CardContainer } from "./CardStyles";

interface Props {
    product: string;
    subtitle: string;
    description: string;
    imgURL: string;
    price: number;
}

const Card = ({ product, subtitle, description, imgURL, price }: Props) => {
    const [isHover, setHover] = useState<boolean>(false);
    const [isFavourite, setIsFavourite] = useState<boolean>(false);

    function mouseOnCard(): void {
        setHover(true);
    }

    function mouseOffCard(): void {
        setHover(false);
    }

    function favouriteClick(): void {
        setIsFavourite(!isFavourite);
    }

    return (
        <CardContainer onMouseEnter={mouseOnCard} onMouseLeave={mouseOffCard}>
            <div className="image-container">
                {}
                <img
                    className={`${isHover ? "img-onHover" : "img-OffHover"}`}
                    src={imgURL}
                    alt="rocket"
                ></img>
            </div>
            <div
                className={`image-overlay ${
                    isHover ? "image-overlay-ONHover" : "image-overlay-OFFHover"
                }`}
            ></div>

            <div className="text-area-container">
                <div
                    className={`text-area ${
                        isHover ? "text-area-onHover" : "text-area-offHover"
                    }`}
                >
                    <div className="price">
                        <NumberFormat
                            value={Math.round(price / Math.pow(10, 6))}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                        />
                        {" million/launch"}
                    </div>
                    <div className="text">
                        <h1>{product}</h1>
                        <h2>{subtitle}</h2>

                        <p className="description">{description}</p>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <FontAwesomeIcon
                    className={`${
                        isFavourite ? "favouriteTrue" : "favouriteFalse"
                    }`}
                    icon={faHeart}
                    onClick={favouriteClick}
                ></FontAwesomeIcon>
            </footer>
        </CardContainer>
    );
};

export default Card;
