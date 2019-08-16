import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { instanceOf } from 'prop-types';
import style from './About.module.css'

const About = () => 
    {

        const [post, setPost] = useState({} as any)
    
        useEffect
            (
                () => 
                    {
                    axios.get('https://api.spacexdata.com/v3/info').then((response) => 
                        {
                            console.log(response.data);
                            setPost(response.data);
                        })
                    }, []
            );
    
            return(
               <React.Fragment>
                   <div className={style.tableContainer}>
                    <table className={style.table}>
                        <tr><td>Name:</td> <td>{post.name as any}</td></tr>
                        <tr><td>Founding year:</td> <td>{post.founded as any}</td></tr>
                        <tr><td>CEO:</td> <td>{post.ceo as any}</td></tr>
                        <tr><td>COO:</td> <td>{post.coo as any}</td></tr>
                        <tr><td>Valuation:</td> <td>{post.valuation as any}</td></tr>
                        <tr><td>Summary:</td> <td>{post.summary as any}</td></tr>
                    </table>
                   </div>
               </React.Fragment>
            )
    }

export default About
