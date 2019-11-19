import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
//placeholder avatar
import testAvatar from '../../../assests/testAvatar/avatar.jpg';
import { Menu, MenuItem, ListItem, Divider } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
//utility for constructing className strings conditionally
import clsx from 'clsx';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/auth';



//routing to material ui buttons
const MyLink = React.forwardRef((props, ref) => <NavLink exact activeStyle={{color: 'blue', backgroundColor: '#CDC9C9'}} innerRef={ref} {...props} />);


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#171400',
    color: '#faba39'
    
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    textAlign: 'center',
    backgroundColor: '#fafa23',
    color: 'black'
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    backgroundColor: '#f7d720'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


const WorkerHeader = (props) =>  {
    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    const [menuAnchor, setMenuAnchor] = React.useState(null);

    //open logout menu
    const handleOpenMenu = (event) => {
        setMenuAnchor(event.currentTarget);
    }

    //close logout menu
    const handleMenuClose = () => {
        setMenuAnchor(null);
    }

    const handleLogout = () => {
        props.onLogout();
        props.history.replace('/');
        
    }

    let avatar = null;
    if(open) {
        avatar = <div>
                    <img alt="Yasas Ramanayaka" 
                    src={testAvatar} 
                    style={{height: '90px', width: '90px', alignSelf: 'center', borderRadius: '50%'}}
                    />
                    <br/>
                    <Typography variant="caption">Logged in as</Typography>
                    <h6 style={{color: 'black'}}>Yasas</h6>
                    <Divider/>
                </div>

    }

    return (
        <div className={classes.root}>
            <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
            >
                <Toolbar>
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                    [classes.hide]: open,
                    })}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Grid justify="flex-end" container spacing={2} >
                        <Grid item>
                            <IconButton style={{outline: 'none'}}>
                                <Badge badgeContent={5} color="secondary">
                                    <MailIcon style={{color: '#faba39'}}/>
                                </Badge>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <h6 style={{marginTop: "10px"}}>Username</h6>
                        </Grid>
                        <Grid item>
                            <IconButton 
                            color="inherit"
                            aria-controls="logout-menu"
                            aria-haspopup="true"
                            style={{outline: 'none'}}
                            onClick={handleOpenMenu} 
                            >
                                <AccountCircle/>
                            </IconButton>
                            <Menu
                            id="logout-menu"
                            anchorEl={menuAnchor}
                            keepMounted
                            open={Boolean(menuAnchor)}
                            onClose={handleMenuClose}>
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </Menu>
                        </Grid> 
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
            })}
            classes={{
            paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            }),
            }}
            open={open}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon style={{color: 'white'}} /> : <ChevronLeftIcon style={{color: 'white'}} />}
                    </IconButton>
                </div>
                {avatar}
                <List>
                    <ListItem button to="/worker" component={MyLink} >
                        <ListItemIcon>
                            <DashboardIcon style={{color: 'black'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Dashboard"/>
                    </ListItem>
                    <ListItem button to="/worker/jobs" component={MyLink} >
                        <ListItemIcon>
                            <WorkIcon style={{color: 'black'}}/>
                        </ListItemIcon>
                        <ListItemText primary="browse Jobs"/>
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon>
                            <HistoryIcon style={{color: 'black'}}/>
                        </ListItemIcon>
                        <ListItemText primary="My Bids"/>
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon>
                            <ChatIcon style={{color: 'black'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Chat"/>
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon>
                            <CreateIcon style={{color: 'black'}}/>
                        </ListItemIcon>
                        <ListItemText primary="Edit Profile"/>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
    
};

const matchDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.authLogout())
    }
}



export default connect(null,matchDispatchToProps)(WorkerHeader);