import React, { Component } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import JobDetails from '../../CustomerHome/CustomerDash/LatestJobInfo/LatestJobInfo';

class MyBids extends Component {
    state = {
        bids: [],
        isSelected: false
    }

    //defining table columns
    columns = [
        {
            title: 'Amount',
            dataIndex: 'amount',
            sorter: (a, b) => {return a.title.localeCompare(b.title)},
            sortDirections: ['descend', 'ascend'],
          
        },
        {
            title: 'Job Title',
            dataIndex: 'jobTitle',
            sorter: (a, b) => {return a.category.localeCompare(b.category)},
            sortDirections: ['descend', 'ascend']
           
        },
        {
            title: 'Post Date',
            dataIndex: 'postDate'
            
        },
        {
            title: 'Status',
            dataIndex: 'status',
            sorter: (a, b) => {return a.status.localeCompare(b.status)},
            sortDirections: ['descend', 'ascend']
        }
    ]

    componentDidMount() {
        //requesting server for all jobs posted by the user
        axios.get('http://localhost:4000/bid/getEvery' , {
            params: {
                email: this.props.email
            },
            headers: {
                'x-auth-token': this.props.token
            }
        })
        .then(res => {
            const bids = res.data;
            console.log(bids);
            this.setState({bids: bids});
        })
    }

    //to display before selecting a job
    jobDetails = (
        <p style={{fonFamily: "Verdana, Geneva, sans-serif",
            fontSize: "22px",
            wordSpacing: "2px",
            color: "#6B6B6B",
            fontVariant: "small-caps",
            textShadow: "5px 2px 8px #928B86"
            }}>
                Please select a job to view information...
            </p>
    ); 

    //display the selected job details
    assignJobDetails = (selectedRowKey) => {
        this.state.bids.forEach(job => {
            if(job._id === selectedRowKey.toString()) {
                this.jobDetails = <JobDetails
                    title={job.title}
                    id={job._id}
                    category={job.category}
                    description={job.description}
                    status={job.status}
                    images={job.images}
                    worker={job.assignedWorker}
                />
                this.setState({isSelected: true});
                console.log(job.title);
            }
        })
    }

    render () {

        //selecting table rows
        const rowSelection = {
            onChange: (selectedRowKeys) => {
                this.assignJobDetails(selectedRowKeys);
              },
            type: 'radio'
          };
          
        const data = [];
        this.state.bids.forEach(bid => {
            data.push({
                key: bid._id,
                amount: bid.amount,
                jobTitle: bid.jobId,
                postDate: new Date(bid.postDate).toDateString(),
                status: bid.status
            })
        });
        console.log("render ran");
        return (
            <div style={{marginLeft: '60px'}}>
                <Grid container justify="center" spacing={2} style={{padding: '30px', flexGrow: '1'}}>
                    <Grid item md={12}>
                        <h3 style={{fontFamily:'Roboto, sansSerif'}}>My Jobs</h3>
                        <Divider/>
                    </Grid>
                    <Grid item md={12}>
                        <Paper>
                            <Table 
                            columns={this.columns} 
                            dataSource={data}
                            rowSelection={rowSelection}
                            />
                        </Paper>
                        <br/>
                        <Divider/>
                    </Grid>
                    <Grid item md={12}>
                        {this.jobDetails}
                    </Grid>
                </Grid>
                
            </div>
        );
    }
};

const matchStateToProps = state => {
    return {
        email: state.email,
        token: state.token
    }
}

export default connect(matchStateToProps,null)(MyBids);