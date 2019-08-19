import React, {useState} from 'react';
import style from './Card.module.css';

const Card = (props:{title:string, date: Date, details:String, wikiLink:string} )=> {

    return (
        <React.Fragment>
            <div className={style.cardContainer}>
                <h2>{props.title}</h2>
                <div className={style.cardContent}>
                        <h3>{props.details}</h3>
                        <div>Date: {props.date.toString()}</div>
                        <div><a href={props.wikiLink}>Wikipedia link</a></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Card
