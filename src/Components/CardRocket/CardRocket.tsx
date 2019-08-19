import React from 'react'
import style from './CardRocket.module.css'

const CardRocket = (props:any) => {
    return (
        <React.Fragment>
            <section className={style.cardContainer}>
                <img className={style.rocket} src={props.item.flickr_images}></img>
                <p>{props.item.rocket_name}</p>
                <p>Cost per launch: ${props.item.cost_per_launch}</p>  
                <p>Success rate: {props.item.success_rate_pct}%</p>    
            </section>
        </React.Fragment>
    )
}

export default CardRocket
