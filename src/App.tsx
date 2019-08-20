import React, {useEffect, useState} from 'react';
import {Route, Switch, Redirect, Router} from 'react-router-dom';
import axios from 'axios';
import 'normalize.css';
import Header from './Components/Header/Header';
import CardHistory from './Components/CardHistory/Card';
import style from './App.module.css';
import { interpreterDirective } from '@babel/types';
import HomePage from './Components/HomePage/HomePage';
import NavBar from './Components/NavBar/NavBar';
import Rockets from './Components/Rockets/Rockets';
import About from './Components/About/About';
// import BrowserHistory from 'react-router/lib/BrowserHistory';


const App: React.FC = () => {

  const [news, setNews]  = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadingTimer = setTimeout(() => 
    {
      clearTimeout(loadingTimer);
      axios.get("https://api.spacexdata.com/v3/history").then((response) => 
      {
        console.log(response.data);
        setNews(response.data);
        setIsLoading(false);
      }).catch(function (error) {
        // handle error
        console.log(error);
      });
    }, 2000);
  }, []);
  
  return (
    <React.Fragment>
      <section className={style.pageContainer}>
            <NavBar></NavBar>      
            <section className={style.content}>
                <Switch>
      
                  <Route exact path='/' render={(props)=><HomePage isLoading={isLoading} news={news}/>}/>
                  <Route exact path='/rockets' render={(props)=><Rockets/>}/>
                  <Route exact path='/about' render={(props)=><About/>}></Route>
                </Switch>
            </section>
      </section>
    </React.Fragment>
  );
}

export default App;
