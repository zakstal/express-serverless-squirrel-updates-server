// var React = require('react');
import React, { Component } from 'react';

class Index extends Component {
    render() {
        return (
            <html>
                <head>
                    <title>Pinger</title>
                     <link rel='stylesheet' href='/stylesheets/style.css' />
                     <link rel="shortcut icon" href="/favicons/favicon.ico" type="image/x-icon"/>
                     <link rel="icon" href="/favicons/favicon.ico" type="image/x-icon"/>
                     <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
                    <link rel="manifest" href="/favicons/manifest.json"/>
                    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
                    <meta name="theme-color" content="#ffffff"/>
                     <link href="https://fonts.googleapis.com/css?family=Karla|Khula|Open+Sans|Quicksand|Raleway|Titillium+Web" rel="stylesheet" />
                </head>
                <body>
                    <div className="main-container">
                        <div className="main-body">
                            <div className="main-header">
                                <div>
                                    <img className="main-logo-img" src="//s3.amazonaws.com/pingerpinger/pingerLogo6.png"/>
                                    <h1 className="main-title">Pinger</h1>
                                    <h1 className="main-title small">Beta</h1>
                                </div>
                                <h1 className="main-heading">What did I do yesterday? I'll look in pinger.</h1>
                            
                                {/*
                                <h1 className="main-heading">forget less. accomplish more.</h1>
                                <h1 className="main-heading no-margin">I'll look in pinger.</h1>
                                
                                
                                */}
                            </div>
                            {this.props.children}
                        </div>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports =  Index;