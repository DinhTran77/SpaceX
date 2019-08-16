import React, {useEffect, useState} from 'react'
import axios from 'axios'

const About = () => 
    {

        const [loading, setLoading] = useState(true);
        const [post, setPost] = useState({})
    
        useEffect(() => {
            const loadingTimer = setTimeout(() => 
            {
              clearTimeout(loadingTimer);
              axios.get('https://api.spacexdata.com/v3/info').then((response) => 
              {
                console.log(response.data);
                setPost(response.data);
                setLoading(false);
              });
            }, 2000);
          }, []);
    
            return(
            <div>
                From about
            </div>
            )
    }

export default About
