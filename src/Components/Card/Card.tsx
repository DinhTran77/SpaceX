import React, {useState} from 'react';

const Card = (props:{title:string, date: Date, details:String, wikiLink:URL} )=> {

    return (
        <React.Fragment>
            <div>title: {props.title}</div>
            <div>date: {props.date.toString()}</div>
            <div>details: {props.details}</div>
            <div>Wikipedia: {props.wikiLink}</div>
        </React.Fragment>
    )
}

export default Card
