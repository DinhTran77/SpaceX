
import ReactDom from 'react-dom';
import React from 'react';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';
import CardRocket from './CardRocket';

test('CardRocket Load test',()=>{

    const RocketCard = document.createElement('RocketCard');
    ReactDom.render(<BrowserRouter><App /></BrowserRouter>, RocketCard);
}
)