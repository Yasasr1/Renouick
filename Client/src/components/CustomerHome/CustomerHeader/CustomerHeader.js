import React, { Component } from 'react';
import * as actions from '../../../store/actions/auth';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon  from '@material-ui/icons/Dashboard';
import CreateIcon from '@material-ui/icons/Create';
import HistoryIcon from '@material-ui/icons/History';
import ChatIcon from '@material-ui/icons/Chat';
import WorkIcon from '@material-ui/icons/Work';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import { NavLink } from 'react-router-dom';
import './CustomerHeader.css';
import { ListItem, Divider, Menu, MenuItem } from '@material-ui/core';

//routing to material ui buttons
const MyLink = React.forwardRef((props, ref) => <NavLink exact activeStyle={{color: 'blue', backgroundColor: '#CDC9C9'}} innerRef={ref} {...props} />);





class CustomerHeader extends Component  {
    state = {
        drawerOpen: false,
        menuAnchor: null
    }
    
    //toggle the open/close state of the side drawer
    toggleDrawer = (open) => {

        this.setState({drawerOpen: open});
    }

    handleOpenMenu = (event) => {
        this.setState({menuAnchor: event.currentTarget});
    }

    handleMenuClose = () => {
        this.setState({menuAnchor: null});
    }

    handleLogout = () => {
        this.props.onLogout();
        this.props.history.replace('/');
        
    }



    render() {
        //holds the item list that goes in the side drawer
        const itemList =  
            <div
            className="CustomerHeaderList"
            role="presentation"
            
            onClick={()=> this.toggleDrawer(false)}
            >
                <Avatar alt="Yasas Ramanayaka" 
                src={this.props.profilePicUrl}
                style={{height: '90px', width: '90px', alignSelf: 'center', margin: '20px'}}
                />
                <Typography variant="caption">Logged in as</Typography>
                    <h6>{this.props.fName}</h6>
                <Divider/>
                <List>
                    <ListItem button to="/customer" component={MyLink}>
                        <ListItemIcon>
                            <DashboardIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Dashboard"/>
                    </ListItem>
                    <ListItem button to="/customer/post_job" component={MyLink}>
                        <ListItemIcon>
                            <WorkIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Post Job"/>
                    </ListItem>
                    <ListItem button to="/customer/my_jobs" component={MyLink}>
                        <ListItemIcon>
                            <HistoryIcon/>
                        </ListItemIcon>
                        <ListItemText primary="My Jobs"/>
                    </ListItem>
                    <ListItem button to="/customer/find_worker" component={MyLink}>
                        <ListItemIcon>
                            <SearchIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Find a Worker"/>
                    </ListItem>
                    <ListItem button to="/customer/chat" component={MyLink}>
                        <ListItemIcon>
                            <ChatIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Chat"/>
                    </ListItem>
                    <ListItem button to="/customer/edit" component={MyLink}>
                        <ListItemIcon>
                            <CreateIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Edit Profile"/>
                    </ListItem>
                </List>
            </div>
    
        return (
            <div>
                <AppBar position="static" style={{backgroundColor: '#30291b', color: '#faba39'}}>
                    <Toolbar>
                        <IconButton onClick={()=> this.toggleDrawer(true)} edge="start" color="inherit" style={{outline: 'none'}}>
                            <MenuIcon/>
                        </IconButton>
                        <Grid justify="flex-end" container spacing={2} >
                            <Grid item>
                                <h6 style={{marginTop: "10px", color: 'white'}}>{this.props.fName}</h6>
                            </Grid>
                            <Grid item>
                                <IconButton 
                                color="inherit"
                                aria-controls="logout-menu"
                                aria-haspopup="true"
                                style={{outline: 'none'}}
                                onClick={this.handleOpenMenu} 
                                >
                                   <AccountCircle/>
                                </IconButton>
                                <Menu
                                id="logout-menu"
                                anchorEl={this.state.menuAnchor}
                                keepMounted
                                open={Boolean(this.state.menuAnchor)}
                                onClose={this.handleMenuClose}>
                                    <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                                </Menu>
                            </Grid> 
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.drawerOpen} onClose={()=> this.toggleDrawer(false)}>
                    {itemList}
                </Drawer>
            </div>
        );
    }
};

const matchDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.authLogout())
    }
}

const mapStateToProps = state => {
    return {
        fName: state.user.firstName,
        profilePicUrl: state.user.profilePicUrl
    }
}

export default connect(mapStateToProps,matchDispatchToProps)(CustomerHeader);