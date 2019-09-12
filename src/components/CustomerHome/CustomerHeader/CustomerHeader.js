import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CreateIcon from '@material-ui/icons/Create';
import HistoryIcon from '@material-ui/icons/History';

import './CustomerHeader.css';
import { ListItem } from '@material-ui/core';

class CustomerHeader extends Component  {
    state = {
        drawerOpen: false
    }
    
    toggleDrawer = (open) => {

        this.setState({drawerOpen: open});
    }

    render() {
        const itemList =  
            <div
            className="CustomerHeaderList"
            role="presentation"
            onClick={()=> this.toggleDrawer(false)}
            >
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <DashboardIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Dashboard"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <CreateIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Post Job"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <HistoryIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Previous Jobs"/>
                    </ListItem>
                </List>
            </div>
    
        return (
            <div>
                <AppBar position="static" className="CustomerHeader">
                    <Toolbar>
                        <IconButton onClick={()=> this.toggleDrawer(true)} edge="start" color="inherit" style={{marginTop:'-20px'}}>
                            <MenuIcon/>
                        </IconButton>
                        <Grid justify="flex-end" container>
                            <IconButton color="inherit" style={{marginTop:'-20px'}}>
                               <AccountCircle/>
                            </IconButton>
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

export default CustomerHeader;