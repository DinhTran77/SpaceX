import React from 'react'
import loadingGif from '../../Images/Loading.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import style from './Loading.module.css';
import {faChevronDown } from '@fortawesome/free-solid-svg-icons';


const Loading = (props:any) => {
    return(
    props.isLoading?(<img className={style.loadingAnimation} src={loadingGif} alt="loading animation"></img>): <FontAwesomeIcon icon={faChevronDown} className={style.loadingAnimation}/>
    
    )
}

export default Loading