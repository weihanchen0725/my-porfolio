import React, { Component } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { Typography } from '@mui/material';

class Project1 extends Component {


    render() {
        return (
        <div>
            <Card sx={{ maxWidth: 345}}>
                <CardMedia
                component='img'
                height='140'
                image={require('./img/development.jpg')}
                />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">Employee Management List</Typography>
                <Typography variant='body2' color="text.seconday">
                    List that is able to create, edit, view, and delete employees' first name, last name, and email.
                </Typography>
            </CardContent>
            <CardActions style={{justifyContent: 'center'}}>
                <Button size="small" href="https://friendly-hopper-658006.netlify.app/">Go To</Button>
                <Button size="small" href="https://github.com/weihanchen0725/Employee-Management-React-Springboot">Source Code</Button>
            </CardActions>
            </Card>
        </div>
        );
    }
}

export default Project1;