import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShoppingCart,
    faGreaterThanEqual
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

interface Props {
    product: string;
    subtitle: string;
    description: string;
    imgURL: string;
    price: number;
}

let cardWidth: number = 20;
let cardHeight: number = cardWidth * 1.7;

const CardContainer = styled.div`
    background-size: 100% auto;
    background-repeat: no-repeat;
    width: ${cardWidth}vw;
    height: ${cardHeight}vw;
    overflow: hidden;
    position: relative;
    box-shadow: 10px 10px 29px -19px rgba(0, 0, 0, 0.75);

    .image-container {
        width: 100%;
        height: 60%;
        color: red;
        display: flex;
        justify-content: center;

        img {
            width: auto;
            height: 100%;
        }

        .img-onHover {
            animation: zoomImage 0.5s forwards;
            @keyframes zoomImage {
                from {
                    transform: scale(1);
                }
                to {
                    transform: scale(1.25);
                }
            }
        }

        .img-OffHover {
            animation: unzoomImage 0.5s forwards;
            @keyframes unzoomImage {
                from {
                    transform: scale(1.25);
                }
                to {
                    transform: scale(1);
                }
            }
        }
    }

    .image-overlay {
        width: 100%;
        height: 100%;
        background: black;
        background: #e74c3c;
        position: absolute;
        top: 0;
        opacity: 0;
    }

    .image-overlay-ONHover {
        opacity: 0;
        animation: increaseOpacity 0.1s forwards;
        @keyframes increaseOpacity {
            from {
                opacity: 0;
            }
            to {
                opacity: 0.2;
            }
        }
        opacity: 1;
    }

    .image-overlay-OFFHover {
        opacity: 0.2;
        animation: reduceOpacity 0.1s forwards;
        opacity: 1;
        @keyframes reduceOpacity {
            from {
                opacity: 0.2;
            }
            to {
                opacity: 0;
            }
        }
    }
    .text-area-container {
        width: 100%;
        height: 55%;
        position: absolute;
        bottom: 0;
        .text-area {
            height: 100%;
            font-size: 0.8em;
            overflow: hidden;
            position: absolute;
            bottom: 0;

            .price {
                display: inline-block;
                background: #e74c3c;
                font-size: 1vw;
                color: white;
                padding: 4% 6%;
            }

            .text {
                background: rgb(255, 255, 255);
                height: 100%;
                padding: 4% 11% 2% 11%;
                /* margin-bottom: 14%; */
                overflow: hidden;
                h1,
                h2 {
                    color: rgb(59, 59, 59);
                    text-align: left;
                    margin-bottom: 8%;
                    font-family: "helvetica";
                }
                h1 {
                    font-size: 2vw;
                }

                h2 {
                    font-size: 1.5vw;
                    color: #e74c3c;
                }

                p {
                    font-size: 1vw;
                    font-family: "helvetica";
                    line-height: 1.5em;
                    color: rgb(59, 59, 59);
                    height: 110px;
                    scrollbar-width: none;
                    /* Chrome */
                    &::-webkit-scrollbar {
                        display: none;
                    }
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                }
            }
        }

        .text-area-onHover {
            bottom: 0;
            height: 100%;
            animation: increaseTextAreaHeight 1s forwards;
            p {
                overflow: auto;
            }

            @keyframes increaseTextAreaHeight {
                from {
                    bottom: 0;
                    height: 100%;
                }

                to {
                    bottom: 0;
                    height: 140%;
                }
            }
        }

        .text-area-offHover {
            bottom: 0;
            height: 132.4%;
            animation: reduceTextAreaHeight 1s forwards;

            @keyframes reduceTextAreaHeight {
                from {
                    height: 140%;
                }
                to {
                    height: 100%;
                }
            }
        }
    }

    .footer {
        z-index: 2;
        background: rgb(255, 255, 255);
        display: flex;
        width: 100%;
        height: 13%;
        position: absolute;
        bottom: 0;
        align-items: center;
        padding: 0 11%;
        font-size: 0.8em;
        .favouriteFalse {
            color: #9b9999;
        }

        .favouriteTrue {
            color: #e74c3c;
        }
    }
`;

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
                            value={price}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                        />{" "}
                        per launch
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
