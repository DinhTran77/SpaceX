import styled from "styled-components";

let cardWidth: number = 20;
let cardHeight: number = cardWidth * 1.7;
let animationSpeed: string = "500ms";

export const CardContainer = styled.div`
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
            animation: zoomImage ${animationSpeed} forwards;
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
            animation: unzoomImage ${animationSpeed} forwards;
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
        background: black;
        position: absolute;
        top: 0;
        opacity: 0;
    }

    .image-overlay-ONHover {
        opacity: 0;
        animation: increaseOpacity ${animationSpeed} forwards;
        @keyframes increaseOpacity {
            from {
                opacity: 0;
            }
            to {
                opacity: 0.3;
            }
        }
        opacity: 1;
    }

    .image-overlay-OFFHover {
        opacity: 0.3;
        animation: reduceOpacity ${animationSpeed} forwards;
        opacity: 1;
        @keyframes reduceOpacity {
            from {
                opacity: 0.3;
            }
            to {
                opacity: 0;
            }
        }
    }
    .text-area-container {
        width: 100%;
        height: 60%;
        position: absolute;
        bottom: 0;
        .text-area {
            height: 100%;
            font-size: 1vw;
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
                padding: 4% 11% 2% 5%;
                overflow: hidden;

                h1,
                h2 {
                    color: rgb(59, 59, 59);
                    text-align: left;
                    margin-bottom: 4%;
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
                    height: 48%;
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
            animation: increaseTextAreaHeight ${animationSpeed} forwards;
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
                    height: 125%;
                }
            }
        }

        .text-area-offHover {
            bottom: 0;
            height: 120%;
            animation: reduceTextAreaHeight ${animationSpeed} forwards;

            @keyframes reduceTextAreaHeight {
                from {
                    height: 120%;
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
        font-size: 1vw;
        .favouriteFalse {
            color: #9b9999;
        }

        .favouriteTrue {
            color: #e74c3c;
        }
    }
`;
