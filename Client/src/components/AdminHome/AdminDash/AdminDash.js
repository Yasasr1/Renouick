import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {Grid , Button, Table} from '@material-ui/core';
import ProfileImg from '../../CustomerHome/CustomerDash/ProfileImg/ProfileImg';
import Profileinfo from './ProfileInfo/ProfileInfo';
import EditInfo from './EditInfo/AdminEditInfo';
import profilePic from '../../../assests/OurTeam/member2.jpg';
import WorkerCount from './WorkerCount/WorkerCount';
import * as actions from '../../../store/actions/user';
import PieChart from './PieChart/PieChart';
//import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
//import Button from @material-ui
import LineChart from './LineChart/LineChart';
//import Tabe from './Table/SimpleTable';

 

class AdminDash extends Component {

    render() {

        return (
            <div style={{backgroundColor:'#F5F1FA'}}>
                <Grid container spacing={5} justify="center" direction="row" style={{padding: '100px', flexGrow: '1'}}>
                    
                    <Grid item xs={3}  > <EditInfo/> ></Grid>                        
                    <Grid item xs={9} > <WorkerCount/></Grid>                 
                     

                    <Grid item xs={8}  > <br/>
                       <Typography variant="h4" component="h4" align="center"style={{ fontFamily:"Calibri " , fontSize:27 , fontStyle:"Italic" , color:"black"}}>
                          Monthly Accounts Creation </Typography><br/><LineChart/> ></Grid>                                   
                    <Grid item xs={4} >  <br/>
                       <Typography variant="h4" component="h4" align="center"style={{ fontFamily:"Calibri " , fontSize:27 , fontStyle:"Italic" , color:"black"}}>
                           Exsisting User Accounts Details</Typography>
                           <PieChart/>
                    </Grid>    
                    
                    <Grid item xs={12} >  <br/>
                       <Typography variant="h4" component="h4" align="center"style={{ fontFamily:"Calibri " , fontSize:27 , fontStyle:"Italic" , color:"black"}}>
                         Exsisting Users Details</Typography>
                    </Grid>    
                    
                        <Grid item xl={1}>
                            <Typography variant="body1">Sort</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <select onChange={(event)=>this.sortJobs(event)} className="form-control form-control-sm" id="exampleFormControlSelect1" style={{width: '200px'}}>
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

                        <Grid item xs={12}  > <EditInfo/> ></Grid>   

                    
                    
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