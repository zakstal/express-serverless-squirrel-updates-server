// var React = require('react');
import React, { Component } from 'react';
import Releases from './Releases';

class Index extends Component {
    render() {
        return (
            <html>
                <head>
                     <link rel='stylesheet' href='/stylesheets/style.css' />
                     <link href="https://fonts.googleapis.com/css?family=Karla|Khula|Open+Sans|Quicksand|Raleway|Titillium+Web" rel="stylesheet" />
                </head>
                <body>
                    <div className="main-container">
                        <div className="main-body">
                            <div className="main-header">
                                <div>
                                    <img className="main-logo-img" src="/assets/pingerLogo6.png"/>
                                </div>
                                <h1 className="main-heading">forget less. accomplish more.</h1>
                            </div>
                            <Releases/>
                        </div>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports =  Index;