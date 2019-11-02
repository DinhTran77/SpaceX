import React, { useEffect, Component } from 'react'
import BrowserHistory from 'react-router'
import { createBrowserHistory } from 'history';
import { Link } from 'react-router-dom';
import style from './RocketDetails.module.css'

const RocketDetails = (props: any) => {
    window.onpopstate = (e) => {
        // // e.preventDefault();
        // // // alert('back pressed');
        // props.setSelectedRocket({})
        window.history.go(1);
    }


    return (
        <React.Fragment>
            <section className={style.container}>
                <p><span className={style.text}>Rocket name: </span>{props.selectedRocket.rocket_name} </p>
                <p><span className={style.text}>Description: </span>{props.selectedRocket.description}</p>
                <p><span className={style.text}>First flight: </span>{props.selectedRocket.first_flight}</p>
            </section>
        </React.Fragment>
    )
}

export default RocketDetails
