import React, {useState} from 'react';
import style from './Card.module.css';

const Card = (props:{title:string, date: Date, details:String, wikiLink:string} )=> {

    return (
        <React.Fragment>
            <div className={style.cardContainer}>
                <h2>title: {props.title}</h2>
                <div>date: {props.date.toString()}</div>
                <div>details: {props.details}</div>
                <div>Wikipedia: <a href={props.wikiLink}>Wikipedia link</a></div>
            </div>
        </React.Fragment>
    )
}

export default Card
