import React, { Component } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { Typography } from '@mui/material';

class AboutMe extends Component {


    render() {
        return (
        <div>
            <Card sx={{ maxWidth: 345}}>
                <CardMedia
                component='img'
                height='140'
                image={require('./img/aboutme.png')}
                />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">Basic About Me</Typography>
                <Typography variant='body2' color="text.seconday">
                    General information about me
                </Typography>
            </CardContent>
            <CardActions style={{justifyContent: 'center'}}>
                <Button size="small" href="https://weihanchen0725.github.io/prework-about-me/">Go To</Button>
                <Button size="small" href="https://github.com/weihanchen0725/prework-about-me">Source Code</Button>
            </CardActions>
            </Card>
        </div>
        );
    }
}

export default AboutMe;