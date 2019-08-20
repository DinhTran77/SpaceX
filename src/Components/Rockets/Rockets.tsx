import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { readFile } from 'fs'
import style from './Rockets.module.css'
import CardRocket from '../CardRocket/CardRocket';
import RocketDetails from '../RocketDetails/RocketDetails';

const Rockets = () => {

const [rockets, setRockets] = useState([]);
const [selectedRocket, setSelectedRocket] = useState({});

window.onpopstate  = (e) => {
    window.history.go(0);
    }

useEffect(
            ()=>{
                axios.get("https://api.spacexdata.com/v3/rockets").then
                    ((response)=>
                        {
                        setRockets(response.data);
                        console.log(rockets);
                        }   
                    ).catch(function (error) {
                        // handle error
                        console.log(error);
                      })
                }, []
);

    return (
       <React.Fragment>
           { (Object.getOwnPropertyNames(selectedRocket).length===0)?
                     (<section className={style.rocketsPageContainer}>
                        {rockets.map(
                            (item:any)=>{
                                return (<CardRocket setSelectedRocket={setSelectedRocket} item={item}></CardRocket>)
                            })
                            }
                   </section>)
               :
                (<RocketDetails selectedRocket={selectedRocket} setSelectedRocket={setSelectedRocket}></RocketDetails>)
           }

       </React.Fragment>
    )
}

export default Rockets
