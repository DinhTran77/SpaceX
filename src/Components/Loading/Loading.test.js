import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';

test("Loading doesn't crash",()=>{
    const Loading=document.createElement('Loading');
    ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, Loading)

    
})