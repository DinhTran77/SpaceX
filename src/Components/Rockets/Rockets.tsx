import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { readFile } from 'fs'
import style from './Rockets.module.css'
import CardRocket from '../CardRocket/CardRocket';

const Rockets = () => {

const [rockets, setRockets] = useState([]);

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
           {
               <section className={style.rocketsPageContainer}>
                    {rockets.map(
                        (item:any)=>{
                            return (
                                <CardRocket item={item}></CardRocket>
                                    )
                        })
                        }
               </section>
           }

       </React.Fragment>
    )
}

export default Rockets
