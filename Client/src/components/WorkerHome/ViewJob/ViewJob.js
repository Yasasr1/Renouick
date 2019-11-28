//display a single job after clicking on it in the list
import React from 'react';

const ViewJob = (props) => {
    return (
        <div style={{margin: '100px'}}>
            <p>{props.location.state.title}</p>
        </div>
    )
};

export default ViewJob;