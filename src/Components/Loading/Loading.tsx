import React from 'react'
import loadingGif from '../../Images/Loading2.svg'
import { Animated } from "react-animated-css";
import style from './Loading.module.css';


const Loading = (props: any) => {
    return (
        <img className={style.loadingAnimation} src={loadingGif} alt="loading animation"></img>
    )
}

export default Loading