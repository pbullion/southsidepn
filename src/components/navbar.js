import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';
import { hashHistory } from 'react-router';
import { slide as Menu } from 'react-burger-menu';
import './css/navbar.css';


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 'visitor-nav-item',
          name: 'Home',
          glyph: 'list',
          callback: this.goToHome
        },
        {
          id: 'visitor-nav-item',
          name: 'Visitor Info',
          glyph: 'list',
          callback: this.goToVisitors
        },
        {
          id: 'ministries-nav-item',
          name: 'Ministries',
          glyph: 'list',
          callback: this.goToClients
        },
        {
          id: 'calendar-nav-item',
          name: 'Calendar',
          glyph: 'list',
          callback: this.goToCalendar
        },
        {
          id: 'we-believe-nav-item',
          name: 'We Believe',
          glyph: 'list',
          callback: this.goToWeBelieve
        },
        {
          id: 'we-believe-nav-item',
          name: 'Contact Us',
          glyph: 'list',
          callback: this.goToContact
        },
        {
          id: 'our-staff-nav-item',
          name: 'Our Staff',
          glyph: 'list',
          callback: this.goToStaff
        },
        {
          id: 'photo-gallery-nav-item',
          name: 'Photo Gallery',
          glyph: 'list',
          callback: this.goToClients
        },
        {
          id: 'media-library-nav-item',
          name: 'Media Library',
          glyph: 'list',
          callback: this.goToClients
        },
      ]
    }
  }

  showSettings(event) {
    event.preventDefault();
  }

  goToDashboard() {
    hashHistory.push('dashboard');
  }

  goToVisitors() {
    hashHistory.push('/visitors');
  }

  goToWeBelieve() {
    hashHistory.push('/webelieve');
  }

  goToHome() {
    hashHistory.push('/');
  }

  goToContact() {
    hashHistory.push('/contact');
  }

  goToStaff() {
    hashHistory.push('/staff');
  }

  goToCalendar() {
    hashHistory.push('/calendar');
  }

  render() {

    const navLinks = this.state.items.map((navItem, index) =>
      <a key={index} id={"nav-item-" + index} className="menu-item" onClick={navItem.callback}>
        {navItem.name}</a>
    );

    return (
      <div id="outer-container">
        <Menu isOpen noOverlay pageWrapId={"page-wrap"} outerContainerId={"outer-container"}
          width={'200px'}>
          <h2>Southside</h2>
          <h2>Baptist</h2>
          <h2>Church</h2>
          {navLinks}
          <div className="navbar-address">
            <p>1990 Llano St.</p>
            <p>Port Neches, TX</p>
            <p>(409) 722-7550</p>
          </div>
        </Menu>
      </div>
    )
  }
}

export default NavBar;
