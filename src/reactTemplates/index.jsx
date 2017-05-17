// var React = require('react');
import React, { Component } from 'react';

class Index extends Component {
    render() {
        return (
            <html>
                <head>
                    <title>Pinger</title>
                     <link rel='stylesheet' href='/stylesheets/style.css' />
                     <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon"/>
                     <link rel="icon" href="../favicon.ico" type="image/x-icon"/>
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
                                <h1 className="main-heading">What did I do yesterday?</h1>
                                <h1 className="main-heading no-margin">I'll look in pinger.</h1>
                                {/*
                                <h1 className="main-heading">forget less. accomplish more.</h1>
                                
                                
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