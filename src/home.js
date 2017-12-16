import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';


class Home extends Component {
    constructor(props)  {
      super(props);
      this.state = {
      }
  }

    render() {
        return (
          <div id="top" className="home">
            <div className="home-container">
              <NavBar/>
              <div className="container-fluid page-container">
                {this.props.children}
              </div>
            </div>
          </div>
        );
      }
    }

export default Home;

