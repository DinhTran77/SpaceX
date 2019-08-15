import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';

const App: React.FC = () => {

  const [news, setNews]  = useState([])
  
  useEffect(() => {
    const loadingTimer = setTimeout(() => 
    {
      clearTimeout(loadingTimer);
      axios.get("https://api.spacexdata.com/v3/history").then((response) => 
      {
        console.log(response.data);
        setNews(response.data);
      });
    }, 2000);
  }, []);
  
  return (
    <React.Fragment>
      <Header></Header>
      {news.map((item:any)=>
        {
         return(<Card key={item.id} title={item.title} date={item.event_date_utc} details={item.details} wikiLink= {item.links.wikipedia}></Card>)
        })
        }

    </React.Fragment>
  );
}

export default App;
