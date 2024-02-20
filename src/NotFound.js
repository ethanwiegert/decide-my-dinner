import React from 'react';
import './App.css';
import Header from './Header';

function NotFound(){
    return(
        <div style={{fontFamily: 'Roboto Condensed, sans-serif' }}>
            <div>
            <Header/>
            </div>
            <div>
            <h3>Sorry, that route is not availble. Please try again.</h3>
            </div>
        </div>
    )

}

export default NotFound