import styled from "styled-components";
import backgroundSpace from "./images/space.jpg";

let rocketHeight = 75;
let centerRocket = (100 - rocketHeight) / 2;

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${backgroundSpace});
    background-size: cover;
    position: absolute;
    top: 0;
    .container {
        height: 100%;
        .hero {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            top: 0;
            overflow: hidden;
            position: relative;
            .logo {
                width: 35%;
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
                height: ${rocketHeight}vh;
                z-index: 9;
                position: absolute;
                top: 100vh;
                animation: move-in-rocket 0.3s 1.2s forwards ease-in;
            }

            @keyframes move-in-rocket {
                from {
                    top: 100vh;
                }
                to {
                    top: ${centerRocket}vh;
                }
            }
        }
    }
`;
