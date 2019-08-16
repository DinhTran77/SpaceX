import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import Rockets from './Rockets';
import { BrowserRouter } from 'react-router-dom';


it("Rockets loads without crashing", ()=>{

    const div=document.createElement('div');
    ReactDOM.render( <BrowserRouter><App/></BrowserRouter>,div);

})
   