import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer} from 'recharts';
import { Card, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import axios from 'axios';
import { connect } from 'react-redux';


class EarningsChart extends Component {
    state = {
      bids: [] 
    }

    componentDidMount(){

      //to display in the chart
      axios.get('http://localhost:4000/bid/getAll', {
        headers: {
            'x-auth-token': this.props.token
        },
        params: {
            email: this.props.email
        }
    })
    .then(res => {
        const bids = res.data;
        //console.log(bid);
        const final = bids.map(bid=> {
          let month = new Date(bid.postDate).getMonth() + 1;
          return {
            "amount": bid.amount,
            "month": month
          }
        })
        this.setState({bids: final});
    })
    .catch(err => {
        console.log(err);
    })
    }
    render() {
        const testData = this.state.bids.map(bid=> {
          let month = new Date(bid.postDate).getMonth() + 1;
          return {
            "amount": bid.amount,
            "month": month
          }
        })
        console.log(testData);
        const data = [
            {
              "name": "Page A",
              "uv": 4000,
              
            },
            {
              "name": "Page B",
              "uv": 3000,
              
            },
            {
              "name": "Page C",
              "uv": 2000,
              
            },
            {
              "name": "Page D",
              "uv": 2780,
              
            },
            {
              "name": "Page E",
              "uv": 1890,
              
            },
            {
              "name": "Page F",
              "uv": 2390,
              
            },
            {
              "name": "Page G",
              "uv": 3490,
              
            }
          ]
            
        return (

            <Paper>
                <Card width="100%" style={{height: '55px', backgroundColor: '#E8E7E7'}}>
                <FormControl style={{margin: '6px', Width: '100px'}}>
                    <InputLabel>Year</InputLabel>
                        <Select
                        value={2019}
                        inputProps={{
                            name: 'age',
                            id: 'age-simple',
                        }}
                        style={{width: '100px'}}
                        >
                        <MenuItem value={10}>2020</MenuItem>
                        <MenuItem value={20}>2019</MenuItem>
                        <MenuItem value={30}>2018</MenuItem>
                        </Select>
                </FormControl>
                <br/>
                </Card>
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={this.state.bids}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="amount" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </Paper>

 
        );
    }
}

const mapStateToProps = state => {
  return {
      email: state.email,
      token: state.token
    
  }
}



export default connect(mapStateToProps,null)(EarningsChart);