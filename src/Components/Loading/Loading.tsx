import React from "react";
import loadingAimation from "../../Images/Loading-elipse.svg";
import { Animated } from "react-animated-css";
import style from "./Loading.module.css";
import styled from "styled-components";

import { LoadingPageStyle } from "./LoadingPageStyles";

const Loading = (props: any) => {
    return (
        <LoadingPageStyle>
            <div className="loadingPageContainer">
                <img
                    className="loadingAnimation"
                    src={loadingAimation}
                    alt="loading animation"
                ></img>

                <span>Loading...</span>
            </div>
        </LoadingPageStyle>
    );
};

export default Loading;
