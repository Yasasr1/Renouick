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
        
        return (

            <Paper>
                <Card width="100%" style={{height: '55px', backgroundColor: '#E8E7E7'}}>
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