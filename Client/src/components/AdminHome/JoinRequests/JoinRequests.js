import React,{ Component } from 'react';
import axios from 'axios';
import { Divider } from '@material-ui/core';
import WorkerInfo from './WorkerInfo/WorkerInfo';

class JoinRequests extends Component {
    state = {
        workers: []
    }


    componentDidMount(){
        axios.get('http://localhost:4000/worker/getPending')
        .then(res => {
            const workers = res.data;
            console.log(workers);
            this.setState({workers: workers});
        })
        .catch(err => {
            console.log(err);
        })
    }


    render() {
        this.workers = this.state.workers.map(worker => {
            return <WorkerInfo
                    key={worker._id}
                    fName={worker.firstName}
                    lName={worker.lastName}
                    birthday={worker.birthday}
                    email={worker.email}
                    contactNumber={worker.contactNumber}
                    profession={worker.workingCategory}
                    />
        })

        return (
            <div style={{margin: '80px', marginTop: '100px'}}>
                <h4>All Requests</h4>
                <br/>
                <Divider/>
                <br/>
                {this.workers}
            </div>
        );
    }
}

export default JoinRequests;