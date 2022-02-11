import React, { Component } from 'react';
import AppBar from "@mui/material/AppBar";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

class header extends Component {
    render() {
        return (
            <Box>
                <AppBar position="static">
                    <Typography variant="h3" component="div" sx={{ flexGrow: 1}}>
                        <Button color='inherit'>
                            DiDi's Portfolio
                        </Button>
                    </Typography>
                </AppBar>
            </Box>
        );
    }
}

export default header;