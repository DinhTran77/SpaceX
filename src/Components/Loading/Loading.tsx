import React from "react";
import loadingGif from "../../Images/Loading2.svg";
import { Animated } from "react-animated-css";
import style from "./Loading.module.css";
import styled from "styled-components";

const LoadingPageStyle = styled.div`
    .loadingPageContainer {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .loadingAnimation {
            width: 20vw;
            z-index: 4;
            font-size: 3em;
            color: white;
            margin: 0 auto;
        }
    }
`;
const Loading = (props: any) => {
    return (
        <LoadingPageStyle>
            <div className="loadingPageContainer">
                <img
                    className="loadingAnimation"
                    src={loadingGif}
                    alt="loading animation"
                ></img>
            </div>
        </LoadingPageStyle>
    );
};

export default Loading;
