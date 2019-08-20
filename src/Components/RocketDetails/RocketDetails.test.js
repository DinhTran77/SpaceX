
import ReactDom from 'react-dom';
import React from 'react';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';
import RocketDetails from './RocketDetails';

test('CardRocket Load test',()=>{

    const RocketDetails = document.createElement('RocketDetails');
    ReactDom.render(<BrowserRouter><App /></BrowserRouter>, RocketDetails);
}
)