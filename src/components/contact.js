import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import LazyHero from 'react-lazy-hero';
import './css/visitors.css';

// pictures


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="container">
                <div className="col-xs-12">
                    <h2>Southside Baptist Church</h2>
                    <p>1990 Llano St.</p>
                    <p>Port Neches, TX 77651</p>
                    <p>(409) 722-7550</p>
                    <p><a href="mailto:office@southsideportneches.org" target="_top">office@southsideportneches.org</a></p>
                    <h2>Pastor, David Birdsong</h2>
                    <p><a href="mailto:dbirdsong@southsideportneches.org" target="_top">dbirdsong@southsideportneches.org</a></p>
                    <h2>Minister of Worship, Terry Woodall</h2>
                    <p><a href="mailto:twoodall@southsideportneches.org" target="_top">twoodall@southsideportneches.org</a></p>
                </div>
            </div>
        );
    }
}


export default Contact;
