import React, { Component } from 'react';
import logo from '../logo.svg';
import { Container } from '@mui/material';
import { Button } from '@mui/material';

class Body extends Component {
    render() {
        return (
            <div className='App'>
                <img src={logo} className="App-logo" alt="logo" />
                <br></br>
                <Container>
                    Learning React with Material UI and Styled-Componets
                    <br></br>
                    While Building a Portfolio
                    <br></br>
                    <Button>This is a Button form Material UI</Button>
                </Container>
          </div>
        );
    }
}

export default Body;