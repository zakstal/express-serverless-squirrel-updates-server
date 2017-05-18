// var React = require('react');
import React, { Component } from 'react';
import fetch from 'superagent';

class Releases extends Component {
    componentWillMount() {
        this.state = {
            releases: []
        }
        fetch.get('/api/all-releases').then(res => {
            this.setState({releases: res.body});
        })
    }

    getPublicUrl(url) {
        fetch
            .get('/api/get-public-release')
            .query({url})
            .then(res => {
                window.location.href = res.body;
                console.log('result getpulbic url', res.body);
            })
    }

    renderReleases(releases) {
        console.log('releases', releases)
        return releases.map(release => {
            const { tag_name,  html_url, name, body, assets } = release;
            // TODO filter release type like in update.js/darwin. assets are filterd by OS type.
            const assetUrl = assets[0].url;
            return (
                <a 
                    className="releases-item"
                    key={tag_name} 
                    onClick={(e) => {e.preventDefault(); this.getPublicUrl(assetUrl)}}
                >
                    <p className="release-version">{tag_name}</p>
                    <p>{name}</p>
                    <p>{body}</p>
                </a>
            )
        }) 
    }

    render() {
        // const { releases } = this.props;
        const isState = this.state && this.state.releases;
        const releaseEls = isState ? this.renderReleases(this.state.releases) : null;
        return (
            <section className="releases-container">
                <h2 className="heading-1">Releases</h2>
                <div className="releases-body">
                    <h3 className="sub-heading-1">Mac</h3>
                    <div className="releases-mac">
                        { releaseEls }
                    </div>
                </div>
            </section>
        )
    }
}

module.exports = Releases;