// var React = require('react');
import React, { Component } from 'react';

class Index extends Component {
    render() {
        const metaDesc = 'What did you do yesterday? Look in pinger. Pinger pops up from your tray on a semi random interval so you can track how you spend you time.'
        const metaTitle = "Pinger"
        return (
            <html>
                <head>
                    <title>Pinger</title>
                    <meta charset="utf-8"/>
                    <meta name="description" content={metaDesc}/>
                    <meta property="og:title" content={metaTitle}/>
                    <meta property="og:description" content={metaDesc}/>
                    <meta property="og:site_name" content={metaTitle}/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:image" content="//s3.amazonaws.com/pingerpinger/pingerLogo6.png"/>
                    <meta property="og:image:type" content="image/svg+xml"/>
                    <meta property="og:image:width" content="300"/>
                    <meta property="og:image:height" content="300"/>
                    <meta property="twitter:title" content={metaTitle}/>
                    <meta property="twitter:description" content={metaDesc}/>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui"/>
                    <link rel='stylesheet' href='/stylesheets/style.css' />
                    <link rel="shortcut icon" href="//s3.amazonaws.com/pingerpinger/favicon.ico" type="image/x-icon"/>
                    <link rel="icon" href="//s3.amazonaws.com/pingerpinger/favicon.ico" type="image/x-icon"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="//s3.amazonaws.com/pingerpinger/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="//s3.amazonaws.com/pingerpinger/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="//s3.amazonaws.com/pingerpinger/favicon-16x16.png"/>
                    <link rel="manifest" href="//s3.amazonaws.com/pingerpinger/manifest.json"/>
                    <link rel="mask-icon" href="//s3.amazonaws.com/pingerpinger/safari-pinned-tab.svg" color="#5bbad5"/>
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