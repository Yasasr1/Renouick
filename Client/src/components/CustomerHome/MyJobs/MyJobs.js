import React, { Component } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import JobDetails from '../CustomerDash/LatestJobInfo/LatestJobInfo';

class MyJobs extends Component {
    state = {
        jobs: [],
        isSelected: false
    }

    //defining table columns
    columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            sorter: (a, b) => {return a.title.localeCompare(b.title)},
            sortDirections: ['descend', 'ascend'],
          
        },
        {
            title: 'Category',
            dataIndex: 'category',
            sorter: (a, b) => {return a.category.localeCompare(b.category)},
            sortDirections: ['descend', 'ascend']
           
        },
        {
            title: 'Description',
            dataIndex: 'description'
            
        },
        {
            title: 'Post Date',
            dataIndex: 'postDate',
            sorter: (a, b) => {return a.postDate.localeCompare(b.postDate)},
            sortDirections: ['descend', 'ascend']
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
        axios.get('http://localhost:4000/job/getAll' , {
            params: {
                email: this.props.email
            },
            headers: {
                'x-auth-token': this.props.token
            }
        })
        .then(res => {
            const jobs = res.data;
            console.log(jobs);
            this.setState({jobs: jobs})
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
        this.state.jobs.forEach(job => {
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
        this.state.jobs.forEach(job => {
            data.push({
                key: job._id,
                title: job.title,
                category: job.category,
                description: job.description,
                postDate: new Date(job.postDate).toDateString(),
                status: job.status
            })
        });
        console.log("render ran");
        return (
            <React.Fragment>
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
                
            </React.Fragment>
        );
    }
};

const matchStateToProps = state => {
    return {
        email: state.email,
        token: state.token
    }
}

export default connect(matchStateToProps,null)(MyJobs);