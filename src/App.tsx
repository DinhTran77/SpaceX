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
        // setLoading(false);
      });
    }, 2000);
  }, []);
  
  return (
    <React.Fragment>
      <Header></Header>
      <Card title="Dinhs page" date={new Date(new Date().getDate())} details="dddd" wikiLink= {new URL('https://example.org/')}></Card>
    </React.Fragment>
  );
}

export default App;
