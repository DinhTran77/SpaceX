import React from 'react';
import ReactDOM from 'react-dom';
import App from './../../App';
import HomePage from './HomePage';
import { BrowserRouter } from 'react-router-dom';


it("renders without crashing", ()=>{
    const home= document.createElement('HomePage');
    ReactDOM.render(  <BrowserRouter><App/></BrowserRouter>, home);
})
