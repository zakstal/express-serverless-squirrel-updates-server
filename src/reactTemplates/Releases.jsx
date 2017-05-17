// var React = require('react');
import React, { Component } from 'react';

class Releases extends Component {

    renderReleases(releases) {
        return releases.map(release => {
            const { tag_name,  html_url, name, body } = release;
            return (
                <a 
                    className="releases-item"
                    key={tag_name} 
                    href={ html_url}
                >
                    <p className="release-version">{tag_name}</p>
                    <p>{name}</p>
                    <p>{body}</p>
                </a>
            )
        }) 
    }

    render() {
        const { releases } = this.props;
        const releaseEls = releases ? this.renderReleases(releases) : null;
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