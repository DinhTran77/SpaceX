import React from 'react'
import ReactDOM from 'react-dom'
import App from '../../App'
import About from './About'
import { BrowserRouter } from 'react-router-dom';

it("Hero loads without crashing", ()=>{

    const About=document.createElement('About');
    ReactDOM.render(<BrowserRouter><App></App></BrowserRouter>,About);

})
