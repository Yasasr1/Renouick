import React from 'react';
import { Paper } from '@material-ui/core';

const Bid = (props) => {
    return(
        <Paper>
            <p>amount: {props.amount}</p>
            <p>poster: {props.poster}</p>
            <p>date: {props.date}</p>
        </Paper>
    );
};

export default Bid;