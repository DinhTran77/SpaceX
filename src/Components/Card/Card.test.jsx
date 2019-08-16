import Card from './Card';
import ReactDom from 'react-dom';
import React from 'react';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';


       test("Card renders without crashing", ()=>
            {
                const div = document.createElement('Card');
                ReactDom.render(<BrowserRouter><App /></BrowserRouter>, div);
            }
        );