import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import LazyHero from 'react-lazy-hero';
import './css/landing_page.css';

// pictures
import church_pic from '../assets/images/front_of_church.jpg';


class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="">
                <div className="hero-text">
                    <LazyHero imageSrc={church_pic} color="#7caeff" opacity="0.4">
                        <div className="container">
                            <div className="col-xs-12 col-md-6">
                                <h2>Sundays</h2>
                                <div className="col-xs-8 hero-schedule">
                                    <h4>Coffee & Fellowship</h4>
                                    <h4>Bible Study</h4>
                                    <h4>Worship</h4>
                                    <h4>Children's Church</h4>
                                    <h4>Handbells</h4>
                                </div>
                                <div className="col-xs-3 hero-schedule">
                                    <h4>9:15 am</h4>
                                    <h4>9:30 am</h4>
                                    <h4>10:30 am</h4>
                                    <h4>10:30 am</h4>
                                    <h4>5:00 pm</h4>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <h2>Wednesdays</h2>
                                <div className="col-xs-6">
                                    <h4>Coffee & Fellowship</h4>
                                    <h4>Bible Study</h4>
                                    <h4>Worship</h4>
                                    <h4>Children's Church</h4>
                                    <h4>Handbells</h4>
                                </div>
                                <div className="col-xs-6">
                                    <h4>9:15 am</h4>
                                    <h4>9:30 am</h4>
                                    <h4>10:30 am</h4>
                                    <h4>10:30 am</h4>
                                    <h4>5:00 pm</h4>
                                </div>
                            </div>
                        </div>
                    </LazyHero>
                </div>
                <div className="intro-text">
                    <p>Southside is a vibrant congregation with believers representing many stages of life, all seeking to serve and honor our Savior,  Jesus Christ. Whether you are a parent, a senior adult, a single adult, a teenager or a young adult, Southside has something for you.</p>
                    <p>It is our goal to be a place of spiritual discipleship, inspired worship, and Christian service: “A family of Faith, Hope and Love.” If you’re looking for a place to deepen your faith, worship the Savior and belong to a caring family of believers, Southside is the place for you.</p>
                </div>
                <div className="row">
                    <div className="announcements">
                        <div className="announcement1 col-xs-12 col-md-6">
                            <h1>Wednesday Night Meals</h1>
                            <h2>We will not have regular Wednesday night meals in December.</h2>
                        </div>
                        <div className="announcement2 col-xs-12 col-md-6">
                            <h1>Christmas Eve</h1>
                            <h2>NO Sunday School</h2>
                            <h2>Morning: 10:30 AM</h2>
                            <h2>Evening: 6:00 pm</h2>
                            
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


export default LandingPage;
