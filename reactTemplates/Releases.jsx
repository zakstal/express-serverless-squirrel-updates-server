// var React = require('react');
import React, { Component } from 'react';
import {getAllReleases, getLatestRelease, getPublicDownloadUrl} from '../src/components/github';

class Releases extends Component {

    coponentWillMount() {
        this.state = {
            releases: []
        }
    }

    getReleases() {
        getAllReleases().then(releases => {
            this.setState({releases})
        })
    }

    renderReleases() {
        this.state.releases.map(release => {
            const { tag_name, assets_url, name, body } = release;
            return (
                <a key={tag_name} href={assets_url}>
                    <p>{tag_name}</p>
                    <p>{name}</p>
                    <p>{body}</p>
                </a>
            )
        }) 
    }

    render() {
        this.getReleases();
        return (
            <section className="releases-container">
                <h2 className="heading-1">Releases</h2>
                <div className="releases-body">
                    <h3 className="sub-heading-1">Mac</h3>
                    <div className="releases-mac">
                        {this.state && this.state.releases ? this.renderReleases() : null}
                    </div>
                </div>
            </section>
        )
    }
}

module.exports = Releases;