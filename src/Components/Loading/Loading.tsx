import React from 'react'
import loadingGif from '../../Images/Loading2.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {Animated} from "react-animated-css";
import style from './Loading.module.css';
import {faChevronDown } from '@fortawesome/free-solid-svg-icons';


const Loading = (props:any) => 
{
    return(
    props.isLoading?
        (
            <img className={style.loadingAnimation} src={loadingGif} alt="loading animation"></img>
        )
    : 
        (
            <FontAwesomeIcon icon={faChevronDown} className={style.chevron}/>
        )
    )
}

export default Loading