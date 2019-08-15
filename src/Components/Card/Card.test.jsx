import Card from './Card';
import ReactDom from 'react-dom';
import React from 'react';
import App from '../../App';


       test("Card renders without crashing", ()=>
            {
                const div = document.createElement('Card');
                ReactDom.render(<App />, div);
            }
        );