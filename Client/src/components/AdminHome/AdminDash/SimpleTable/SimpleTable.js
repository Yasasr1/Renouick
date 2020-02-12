import React, { Component } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
//import JobDetails from '../CustomerDash/LatestJobInfo/LatestJobInfo';

class SimpleTable extends Component {
    state = {
        customers: null,
        workers : null
    }

    //defining table columns
    columns = [
        {
            title: 'Name',
            dataIndex: 'username',
            sorter: (a, b) => {return a.category.localeCompare(b.category)},
            sortDirections: ['descend', 'ascend']
           
        },
        {
            title: 'Phone No',
            dataIndex: 'contactNumber'
            
        },
        {
            title: 'Registered Date',
            dataIndex: 'registrationDate',
            sorter: (a, b) => {return a.postDate.localeCompare(b.postDate)},
            sortDirections: ['descend', 'ascend']
        },
        {
            title: 'User Type',
            dataIndex: 'userType',
            
        }
    ]

    componentDidMount() {
        //requesting server for all customers posted by the user
        axios.get('http://localhost:4000/admin/getAllCustomers' , {
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
            this.setState({customers: customers})
        })
    }

    
    render () {

             
        let test = [];
        if(this.state.customers)
            test = this.state.customers;
        const data = [];
        test.forEach(customer => {
            data.push({
                key: customer._id,
                username: customer.username,
                contactNumber: customer.contactNumber,
                registrationDate: new Date(customer.registrationDate).toDateString(),
                //userType: users.userType
            })
        });
        console.log("render ran");
        return (
            <React.Fragment>
                <Grid container justify="center" spacing={2} style={{padding: '30px', flexGrow: '1'}}>
                    <Grid item md={12}>
                        <Divider/>
                    </Grid>
                    <Grid item md={12}>
                        <Paper>
                            <Table 
                            columns={this.columns} 
                            dataSource={data}
                           />
                        </Paper>
                        <br/>
                        <Divider/>
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

export default connect(matchStateToProps,null)(SimpleTable);