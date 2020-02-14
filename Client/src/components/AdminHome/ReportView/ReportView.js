import React,{ Component } from 'react';
import Report from './Report/Report';
import axios from 'axios';
import { Divider } from '@material-ui/core';

class ReportView extends Component {
    state = {
        reports: []
    }

    reports = null;

    componentDidMount(){
        axios.get('http://localhost:4000/report/getAll')
        .then(res => {
            const reports = res.data;
            console.log(reports);
            this.setState({reports: reports});
        })
        .catch(err => {
            console.log(err);
        })
    }


    render() {
        this.reports = this.state.reports.map(report => {
            return <Report
                   key={report._id}
                   id={report._id}
                   title={report.title}
                   description={report.description}
                   poster={report.poster}
                   reportedAbout={report.ReportedAbout}
                   status={report.status}
                    />
        })

        return (
            <div style={{margin: '80px', marginTop: '100px'}}>
                <h4>All reports</h4>
                <br/>
                <Divider/>
                <br/>
                {this.reports}
            </div>
        );
    }
}

export default ReportView;