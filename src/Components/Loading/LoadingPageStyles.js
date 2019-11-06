import styled from "styled-components";

export const LoadingPageStyle = styled.div`
    .loadingPageContainer {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        background: grey;
        .loadingAnimation {
            width: 15vw;
            z-index: 4;
            font-size: 3em;
            color: white;
            /* margin: 0 auto; */
            position: absolute;
        }

        span {
            color: #ffffff;
            font-size: 1vw;
            animation: blinker 2.75s linear infinite;
            position: absolute;
        }

        @keyframes blinker {
            50% {
                opacity: 0;
            }
        }
    }
`;