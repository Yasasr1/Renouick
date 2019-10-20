import React from 'react';
import Paper from '@material-ui/core/Paper'

const StatisticsCard = (props) => {
    const style = {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: props.color,
        color: 'white'
    }

    return (
        <Paper style={style}>
            {props.icon}
            <p>{props.desc}</p>
            <h3 style={{color: 'white'}}>{props.number}</h3>
        </Paper>
    );
};

export default StatisticsCard;