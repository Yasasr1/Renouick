import React from 'react';
import { Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    card: {
        minWidth: 0,
        maxWidth: 100,
        minHeight:0,
        maxHeight:100,
    },

    media: {
      height: 0,
        paddingTop: '100%',
       // paddingInline:'0%',
        //paddingBottom: '70.25%',
    image:{
        //paddingLeft:'50%',
    },
      },
}));

const CardBox1 = (props) => {
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



export default CardBox1;