import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer} from 'recharts';
import { Card, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';

class LineChart extends Component {

    render() {
        const data = [
            {
                "name": "January",
                "uv": 4000,
                "pv": 2400,
                "amt": 2400
              },
              {
                "name": "February",
                "uv": 3000,
                "pv": 1398,
                "amt": 2210
              },
              {
                "name": "March",
                "uv": 2000,
                "pv": 9800,
                "amt": 2290
              },
              {
                "name": "April",
                "uv": 2780,
                "pv": 3908,
                "amt": 2000
              },
              {
                "name": "May",
                "uv": 1890,
                "pv": 4800,
                "amt": 2181
              },
              {
                "name": "June",
                "uv": 2390,
                "pv": 3800,
                "amt": 2500
              },
              {
                "name": "August",
                "uv": 3490,
                "pv": 4300,
                "amt": 2100
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
                        <MenuItem value={10}>2019</MenuItem>
                        <MenuItem value={20}>2018</MenuItem>
                        <MenuItem value={30}>2017</MenuItem>
                        </Select>
                </FormControl>
                <br/>
                </Card>
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={data}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </Paper>

 
        );
    }
}

export default LineChart;