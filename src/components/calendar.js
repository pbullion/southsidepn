import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './events';
import './css/react-big-calendar.css';
import './css/calendar.css';
import 'react-big-calendar/lib/less/styles.less';


BigCalendar.momentLocalizer(moment);
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        
        return (
            <div className="calendar">
				<BigCalendar
                    events={events}
                    views={['month','week','day','agenda']}
                    step={30}
                    defaultDate={new Date(2015, 3, 1)}
				/>
            </div>
        );
    }
}


export default Calendar;
