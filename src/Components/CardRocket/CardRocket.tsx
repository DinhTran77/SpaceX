import React ,{useState} from 'react'
import style from './CardRocket.module.css'

const CardRocket = (props:any) => {
    const [selected, setSelected] = useState(false);

    function selectRocket() 
        {
            props.setSelectedRocket(props.item);
        }

    return (
        <React.Fragment>
            <a className={style.cardContainer} onClick={selectRocket}>
                <img className={style.rocket} src={props.item.flickr_images}></img>
                <p><span className={style.text}>{props.item.rocket_name}</span></p>
                <p><span className={style.text}>Cost per launch: </span>${props.item.cost_per_launch}</p>  
                <p><span className={style.text}>Success rate: </span>{props.item.success_rate_pct}%</p>
            </a>
        </React.Fragment>
    )
}

export default CardRocket
