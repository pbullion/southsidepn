import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import LazyHero from 'react-lazy-hero';
import './css/staff.css';

// pictures
import david from '../assets/images/davidbirdsong.jpg'
import terry from '../assets/images/terrywoodall.jpg'

class Staff extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="stafftoplevel">
                <div className="pastor col-xs-12">
                    <h1>Pastor</h1>
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <img id="staffpic" src={david} alt="davidbirdsong" />
                            <h2>Dr. David Birdsong</h2>
                        </div>
                        <div className="col-xs-12 col-md-6 stafftext">
                            <p>Bro. David has been our pastor since 2007.  He is a graduate of Baylor University and Southwestern Seminary.  In 2004 he received his doctorate in ministry from Midwestern Seminary.   He is a native of Oklahoma and was called to ministry at a youth camp when he was 13.  He has been in ministry since 1996.  He and his wife Rene have three grown children and live in Port Neches.</p>
                        </div>
                    </div>
                </div>
                <div className="music col-xs-12">
                    <h1>Minister of Music</h1>
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <img id="staffpic" src={terry} alt="terrywoodall" />
                            <h2>Terry Woodall</h2>
                        </div>
                        <div className="col-xs-12 col-md-6 stafftext">
                            <p>Terry has served as the Minister of Worship since 1998.  He is a graduate of Lamar University receiving a Bachelor of Science degree in Music Education in 1978 and a Masters of Music Education in 1984.  He is currently the Assistant Choral Director/Accompanist for Nederland ISD.  He has been in ministry since 1980.  He and his wife Connie have two married daughters, and two granddaughters. They reside in Port Neches.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Staff;
