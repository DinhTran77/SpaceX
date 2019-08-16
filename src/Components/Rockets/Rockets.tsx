import React, {useEffect, useState} from 'react'
import axios from 'axios'

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
               rockets.map(
                   (item:any)=>{
                       return <div>{item.rocket_name}</div>
                   }
               )
           }

       </React.Fragment>
    )
}

export default Rockets
