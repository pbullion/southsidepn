import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import './css/we_believe.css';

// pictures


class WeBelieve extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="we-believe-text">
                <p>Solid theology is important.  While there is room in many areas of faith for varying opinions and interpretations, there are some foundational, biblical beliefs that we feel are not open to interpretation.  Below is a list of these beliefs.</p>
                <h1>We Believe:</h1>
                <p>…there is one living and true God. He is the creator of all that is. He is active in creation and loving toward all of mankind.</p>
                <p>…Jesus is the Son of God. He was born of a virgin, performed abundant miracles, lived a sinless life, was crucified on the cross, and was resurrected in His physical body. He ascended to the right hand of God, and will one day return again to earth.</p>
                <p>…the Bible is the infallible, complete, and inspired words of God.</p>
                <p>…in the Trinity, God the Father, Jesus Christ his only Son, and the person and work of the Holy Spirit.</p>
                <p>…mankind was created in God’s image. He was drawn into sin by the evil one. He is totally depraved, sinful and in need of salvation offered through Christ alone.</p>
                <p>… in a literal heaven waiting for believers, and a literal hell waiting for those who reject Christ.</p>
                <p>…the Church is the possession of Christ and that Christ Himself is the Cornerstone. We believe the Christian church consists of born again, baptized believers of all times and ages, and that the membership of Southside Baptist Church of Port Neches, Texas is a part.</p>
            </div>
        );
    }
}


export default WeBelieve;
