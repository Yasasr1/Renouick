import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {Grid , Button} from '@material-ui/core';
import EditInfo from './EditInfo/AdminEditInfo';
import WorkerCount from './WorkerCount/WorkerCount';
import * as actions from '../../../store/actions/user';
import PieChart from './PieChart/PieChart';
import Typography from '@material-ui/core/Typography';
import LineChart from './LineChart/LineChart';
import SimpleTable from './SimpleTable/SimpleTable';
import axios from "axios";
 

class AdminDash extends Component {
    state={
        cCount: 0, 
        wCount: 0,
        tCount: 0,
        pWork : 0,
        cWork : 0,
        oWork : 0,
    }

    componentDidMount(){
        axios.get('http://localhost:4000/admin/getCountCustomer' , {
            params: {
                email: this.props.email
            },
            headers: {
                'x-auth-token': this.props.token
            }
        })
        .then(res => {
            const CustomerNumber = res.data;
            console.log("customers: "+CustomerNumber);
            this.setState({cCount:CustomerNumber})
                    
        })

        axios.get('http://localhost:4000/admin/getCountWorker' , {
            params: {
                email: this.props.email
            },
            headers: {
                'x-auth-token': this.props.token
            }
        })
        .then(res => {
            const workerNumber = res.data;
            console.log("workers: "+workerNumber);
            this.setState({wCount:workerNumber})
            let customers = this.state.cCount;
            let total = customers + workerNumber;
            this.setState({tCount: total});
            
        })
        axios.get('http://localhost:4000/admin/getCountPJob' , {
            params: {
                email: this.props.email
            },
            headers: {
                'x-auth-token': this.props.token
            }
        })
        .then(res => {
            const jobPNumber = res.data;
            console.log("Pendingjobs: "+jobPNumber);
            this.setState({pWork:jobPNumber})
                    
        })
        axios.get('http://localhost:4000/admin/getCountCJob' , {
            params: {
                email: this.props.email
            },
            headers: {
                'x-auth-token': this.props.token
            }
        })
        .then(res => {
            const jobCNumber = res.data;
            console.log("Completedjobs: "+jobCNumber);
            this.setState({cWork:jobCNumber})
                    
        })
        axios.get('http://localhost:4000/admin/getCountOJob' , {
            params: {
                email: this.props.email
            },
            headers: {
                'x-auth-token': this.props.token
            }
        })
        .then(res => {
            const jobONumber = res.data;
            console.log("Ongoingjobs: "+jobONumber);
            this.setState({oWork:jobONumber})
                    
        })
        
    }
    render() {

        return (
            <div style={{backgroundColor:'#F5F1FA'}}>
                <Grid container spacing={5} justify="center" direction="row" style={{padding: '100px', flexGrow: '1'}}>
                    
                    <Grid item xs={3}  > <EditInfo/> ></Grid>                        
                    <Grid item xs={9} > <WorkerCount Workers={this.state.wCount} Customers={this.state.cCount} Total={this.state.tCount} PWork={this.state.pWork} CWork={this.state.cWork} UWork={this.state.oWork}/></Grid>                 
                     

                    <Grid item xs={8}  > <br/>
                       <Typography variant="h4" component="h4" align="center"style={{ fontFamily:"Times New Roman " , fontSize:27 , fontStyle:"Bold" , color:"black"}}>
                          Total Accounts Per Month </Typography><br/><LineChart /> ></Grid>                                   
                    <Grid item xs={4} >  <br/>
                       <Typography variant="h4" component="h4" align="center"style={{ fontFamily:"Times New Roman " , fontSize:27 , fontStyle:"Bold" , color:"black"}}>
                           Exsisting User Accounts Details</Typography>
                           <PieChart/>
                    </Grid>    
                    
                    <Grid item xs={12} >  <br/>
                       <Typography variant="h4" component="h4" align="center"style={{ fontFamily:"Times New Roman" , fontSize:27 , fontStyle:"Bold" , color:"black"}}>
                         Exsisting Users Details</Typography>
                    </Grid>    
                    
                        <Grid item xl={1}>
                            <Typography variant="body1">Show</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <select  className="form-control form-control-sm" id="exampleFormControlSelect1" style={{width: '200px'}}>
                            <option value={1}>All</option>
                            <option value={2}>Workers Only</option>
                            <option value={3}>Customers Only</option>                         
                            </select>
                        </Grid>
                        <Grid item md={3}>
                            <input onChange={this.inputChangeHandler} type="text" className="form-control" placeholder="Search Worker or Customer here" />
                        </Grid>
                        <Grid item md={3}>
                            <Button onClick={this.searchWorker} color="primary" variant="contained">Search</Button>
                        </Grid>

                        <Grid item xs={12}  > <SimpleTable/> ></Grid>   

                    
                    
                </Grid>    
                    
               
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.email,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAdminInfo: (email, token) => dispatch(actions.getUser(email, token))
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(AdminDash);