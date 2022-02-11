import React, { Component } from 'react';
import AppBar from "@mui/material/AppBar";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

class header extends Component {

    render() {
        return (
            <Box>
                <AppBar position="static" >
                    <div>
                        <Button color='inherit' href=".">
                            <h3>Wei Han Chen</h3>
                        </Button>
                        <Button color='inherit' href="https://github.com/weihanchen0725">
                            Github
                        </Button>
                        <Button color='inherit' href="https://www.linkedin.com/in/weihanchen0725/">
                            LinkedIn
                        </Button>
                    </div>
                </AppBar>
            </Box>
        );
    }
}

export default header;