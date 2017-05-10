import React, { Component } from 'react';
import { Link } from 'react-router';

// class component
export default class CssMaskSlideShow extends Component {

    render() {
        return (
            <div className="demo-1">

                <div className="page-view">
                    <div className="project">
                        <div className="text">
                            <h1>"All good things are <br /> wild &amp; free"</h1>
                            <p>Photo by Andreas Rønningen</p>
                        </div>
                    </div>
                    <div className="project">
                        <div className="text">
                            <h1>“Into the wild”</h1>
                            <p>Photo by John Price</p>
                        </div>
                    </div>
                    <div className="project">
                        <div className="text">
                            <h1>“Is spring coming?”</h1>
                            <p>Photo by Thomas Lefebvre</p>
                        </div>
                    </div>
                    <div className="project">
                        <div className="text">
                            <h1>“Stay curious”</h1>
                            <p>Photo by Maria</p>
                        </div>
                    </div>
                    <nav className="arrows">
                        <div className="arrow previous">
                            <svg viewBox="208.3 352 4.2 6.4">
                                <polygon className="st0" points="212.1,357.3 211.5,358 208.7,355.1 211.5,352.3 212.1,353 209.9,355.1"/>
                            </svg>
                        </div>
                        <div className="arrow next">
                            <svg viewBox="208.3 352 4.2 6.4">
                                <polygon className="st0" points="212.1,357.3 211.5,358 208.7,355.1 211.5,352.3 212.1,353 209.9,355.1"/>
                            </svg>
                        </div>
                    </nav>
                </div>

            </div>
        );
    }

}
