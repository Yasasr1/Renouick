import React from 'react';
import { Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    card: {
        minWidth: 200,
        maxWidth: 345,
    },

    media: {
        height: 0,
        paddingTop: '56.25%',
      },
}));

const CardBox = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardHeader title={props.title}/>
            <CardMedia className={classes.media} image={props.image} />
            <CardContent>
                <p>{props.content}</p>
            </CardContent>
        </Card>
    );

}



export default CardBox;