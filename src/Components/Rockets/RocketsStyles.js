import styled from "styled-components";
import backgroundSpace from "../HomePage/images/space.jpg";

export const RocketStyles = styled.div`
    .rocketsPageContainer {
        background-image: url(${backgroundSpace});
        background-size: cover;
        font-size: 0.8em;
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        z-index: 11;

        .BootstrapContainer {
            width: 100%;
            height: 90vh;
            max-width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            margin: 0;
            position: absolute;
            bottom: 0;
            z-index: 1;
        }
    }

    .loading {
        width: 10%;
    }
`;
