import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { instanceOf } from 'prop-types';
import style from './About.module.css'
import Loading from './../Loading/Loading';

const About = () => 
    {

        const [post, setPost] = useState({} as any)
        const [isLoading, setIsLoading] = useState(true);
    
        useEffect
            (
                () => {

                    const loadingTimer = setTimeout
                    (() =>{
                    axios.get('https://api.spacexdata.com/v3/info').then((response) => 
                        {
                            setPost(response.data);
                            setIsLoading(false);
                        })
                    }, 1000);
                    }, []
            );
    
            return(
               <React.Fragment>
                <div className={style.container}>
                        {isLoading?(<Loading></Loading>):(   
                                    <table className={style.table}>
                                        <tr><td className={style.row_title}>Name:</td> <td className={style.row_content}>{post.name as any}</td></tr>
                                        <tr><td className={style.row_title}>Founding year:</td> <td className={style.row_content}>{post.founded as any}</td></tr>
                                        <tr><td className={style.row_title}>CEO:</td> <td className={style.row_content}>{post.ceo as any}</td></tr>
                                        <tr><td className={style.row_title}>COO:</td> <td className={style.row_content}>{post.coo as any}</td></tr>
                                        <tr><td className={style.row_title}>Valuation:</td> <td className={style.row_content}>${post.valuation as any}</td></tr>
                                        <tr><td className={style.row_title}>Summary:</td> <td className={style.row_content}>{post.summary as any}</td></tr>
                                    </table>
                        )}
                </div>
               </React.Fragment>
            )
    }

export default About
