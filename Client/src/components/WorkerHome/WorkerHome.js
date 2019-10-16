import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WorkerHeader from './WorkerHeader/WorkerHeader';
import WorkerDash from './WorkerDash/WorkerDash';


const WorkerHome = (props) => {

    return (
        <React.Fragment>
            <WorkerHeader history={props.history}/>
            <Switch>
                <Route path={props.match.url} exact component={WorkerDash}/>
            </Switch>
        </React.Fragment>
    );

    
};

export default WorkerHome;