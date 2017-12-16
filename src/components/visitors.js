import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import LazyHero from 'react-lazy-hero';
import './css/visitors.css';

// pictures


class Visitors extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="visitor-text">
                <p>Visitors attending Sunday School at 9:30 should enter the rear doors (parking lot entrance) to the facility.  To the left you'll find the Young Adult Class and to the right a coffee bar---help yourself to some informal fellowship in a cup.  Down the hall you'll find the nursery on the right then the Senior Men's Class on the left, Adult Class meets across from them, and at the very end you'll find an excellent class of 'empty nest' adults in the Fellowship Hall.  We also have a Women's Class that meets in the Parlor near the front of the church.</p>

                <p>Students meet upstairs, and children's classes are all in the rear of the Fellowship Hall.</p>

                <p>If you've come for the main service at 10:30, please enter the auditorium through the front doors (Llano Steet entrance) and make yourself at home.  The service will begin shortly.</p>
            </div>
        );
    }
}


export default Visitors;
