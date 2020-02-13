import React, { Component } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Grid, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';


class SimpleTable extends Component {
    state = {
        customers: null,
        workers: null,

    }

    //defining table columns
    columns = [
        {
            title: 'Name',
            dataIndex: 'username',
            sorter: (a, b) => { return a.category.localeCompare(b.category) },
            sortDirections: ['descend', 'ascend']

        },
        {
            title: 'Phone No',
            dataIndex: 'contactNumber'

        },
        {
            title: 'Registered Date',
            dataIndex: 'registrationDate',
            sorter: (a, b) => { return a.postDate.localeCompare(b.postDate) },
            sortDirections: ['descend', 'ascend']
        },
        {
            title: 'User Type',
            dataIndex: 'userType',

        }
    ]

    componentDidMount() {
        //requesting server for all customers posted by the user
        axios.get('http://localhost:4000/admin/getAllCustomers', {
            params: {
                email: this.props.email
            },
            headers: {
                'x-auth-token': this.props.token
            }
        })
            .then(res => {
                const customers = res.data;
                console.log(customers);
                this.setState({ customers: customers })
            })
        //}

        //componentDidMount() {
        //requesting server for all workers posted by the user
        axios.get('http://localhost:4000/admin/getAllWorkers', {
            params: {
                email: this.props.email
            },
            headers: {
                'x-auth-token': this.props.token
            }
        })
            .then(res => {
                const workers = res.data;
                console.log(workers);
                this.setState({ workers: workers })
            })

    }
    //save the substring in the searchbar to state
    inputChangeHandler = (event) => {
        const substring = event.target.value;
        this.setState({ searchString: substring });
    }

    //search for a user with a given name substring
    searchUser = (event) => {
        const string = this.state.searchString;
        const re = new RegExp(string, 'i');

        const userlist = this.state.customers.filter(customer => {
            if (customer.firstName.match(re)) {
                return customer;
            } else if (customer.lastName.match(re)) {
                return customer;
            }
            else
                return null;
        });
        this.setState({ customers: userlist });
    }

    

    render() {

        //data to push in the table
        let test1 = [];
        let test2 = [];
        if (this.state.customers && this.state.workers) {
            test1 = this.state.customers;
            test2 = this.state.workers;
        }

        const data = [];
        test1.forEach(customer => {
            data.push({
                key: customer._id,
                username: customer.firstName + " " + customer.lastName,
                contactNumber: customer.contactNumber,
                registrationDate: new Date(customer.registrationDate).toDateString(),
                userType: "customer"
            })
        });

        test2.forEach(worker => {
            data.push({
                key: worker._id,
                username: worker.firstName + " " + worker.lastName,
                contactNumber: worker.contactNumber,
                registrationDate: new Date(worker.registrationDate).toDateString(),
                userType: "worker"
            })
        });

        console.log("render ran");

        return (
            <React.Fragment>
                <Grid container justify="center" spacing={2} style={{ padding: '30px', flexGrow: '1' }}>
                    <Grid item xl={1}>
                        <Typography variant="body1">Show</Typography>
                    </Grid>
                    
                    <Grid item md={3}>
                        <input onChange={this.inputChangeHandler} type="text" className="form-control" placeholder="Search Worker or Customer here" />
                    </Grid>
                    <Grid item md={3}>
                        <Button onClick={this.searchUser} color="primary" variant="contained">Search</Button>
                    </Grid>
                    <Grid item md={12}>
                        <Divider />
                    </Grid>
                    <Grid item md={12}>
                        <Paper>
                            <Table
                                columns={this.columns}
                                dataSource={data}
                            />
                        </Paper>
                        <br />
                        <Divider />
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

export default connect(matchStateToProps, null)(SimpleTable);