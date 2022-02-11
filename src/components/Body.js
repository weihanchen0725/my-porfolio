import React, { Component } from 'react';
import Project1 from './Project1';
import AboutMe from './AboutMe';

class Body extends Component {
    render() {
        return (
            <div className='App'>
                    <br></br>
                    <AboutMe />     
                    <br></br>
                    <Project1 />
                    <br></br>
          </div>
        );
    }
}

export default Body;