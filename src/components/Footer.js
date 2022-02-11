import React, { Component } from 'react';
import { BottomNavigation, Paper } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

class Footer extends Component {
    render() {
        return (
        <Box>
            <Paper sx={{ width: '100%', position: 'fixed', bottom: '0', left: '0', right: '0', height: '3%'}} elevation={3}>
            <BottomNavigation>
               <Typography variant="h8" component="div" sx={{ flexGrow: '1'}}>@2022 Wei Han Chen</Typography>
            </BottomNavigation>
            </Paper>
        </Box>
        );
    }
}

export default Footer;