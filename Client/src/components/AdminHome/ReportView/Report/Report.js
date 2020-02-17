import React,{ Component } from 'react';
import { Paper, Grid, Divider, Typography, Button} from '@material-ui/core';
import { Modal,Alert } from 'react-bootstrap';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Chat, Channel, ChannelHeader, Thread, Window, MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import { connect } from 'react-redux';
import axios from 'axios';


class Report extends Component {
    state = {
        isPopupOpen: false,
        show: false,
        alert: null,
        alert2: null
    }

    handleModelOpen = () => {
        this.setState({isPopupOpen: true});
    }

    handleModelClose = () => {
        this.setState({isPopupOpen: false});
    }

    handleChatShow = () => {
        this.setState({show: true});
    }

    handleChatClose = () => {
        this.setState({show: false});
    }

    handleContactUser = () => {
        this.handleModelClose();
        this.handleChatShow();
    }

    handleChangeStatus = () => {
        const send = {
            id: this.props.id
        }
        axios.post('http://localhost:4000/report/updateStatus',send)
        .then(res=> {
            console.log(res.data);
            let alert2 = <Alert variant="success">Status Updated</Alert>
            this.setState({alert2: alert2})
            
        })
        .catch(error=> {
            console.log(error);
        })
    }

    handleBanUser = () => {
        const send = {
            email: this.props.reportedAbout
        }

        axios.post('http://localhost:4000/auth/ban',send)
        .then(res=> {
            console.log(res.data);
            let alert = <Alert variant="success">User Banned</Alert>
            this.setState({alert: alert})
        })
        .catch(error=> {
            console.log(error);
        })
    }

    render() {
        const client = new StreamChat("vfkm5qedxex3");
        const userToken = this.props.chatToken;

        const adminEmail = this.props.email;
        var n = adminEmail.indexOf("@");
        var adminName = adminEmail.slice(0, n);
        //console.log(name);

        const customeremail = this.props.reportedAbout
        var m = customeremail.indexOf("@");
        var customername = customeremail.slice(0, m);

        var channelName = adminName.concat('-',customername);
        console.log(channelName);

        //client.disconnect();
        client.setUser(
            {
                id: adminName,
                name: adminName,
                role: 'admin'
                
            },
            userToken,
        );

        const conversation = client.channel('messaging', channelName, {
            name: channelName,
            image: 'http://bit.ly/2O35mws',
            members: [adminName, customername]
        });


        //for holding the chat window

        let chatWindow;
        if(this.state.show === false){
            chatWindow = null;
        }
        else
            chatWindow = <Chat client={client} theme={'messaging light'}>
                            <Channel channel={conversation}>
                                <Window>
                                <ChannelHeader />
                                <MessageList />
                                <MessageInput />
                                </Window>
                                <Thread />
                            </Channel>
                        </Chat>

        return (
            <Paper className="shadow p-3 mb-5 bg-white rounded" style={{padding: '10px'}}>
                <Grid container spacing={1}>
                    <Grid item md={12}>
                        <h5>{this.props.title}</h5>
                    </Grid>
                    <Grid item md={12}>
                        <Divider/>
                    </Grid>
                    <Grid item s={2}>
                        <ReportProblemIcon fontSize="small" style={{color: 'red'}}/> 
                    </Grid>
                    <Grid item md={11}>
                        <Typography variant="caption">{this.props.poster} reported {this.props.reportedAbout}</Typography>
                    </Grid>
                    <Grid container>
                        <Grid item s={3}>
                            <CheckCircleIcon fontSize="small" style={{color: 'blue'}}/> 
                        </Grid>
                        <Grid item md={10}>
                            <p>report status: {this.props.status}</p>
                        </Grid>
                    </Grid>
                    <Grid item md={12}>
                        <Button onClick={this.handleModelOpen} style={{float: 'right'}} variant="contained" color="primary">View</Button>
                    </Grid>
                    <Modal style={{marginTop: '100px'}} show={this.state.isPopupOpen} onHide={this.handleModelClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Typography variant="caption">Posted by: {this.props.poster}</Typography>
                            <br/>
                            <Typography variant="caption">against: {this.props.reportedAbout}</Typography>
                            <br/>
                            <Divider/>
                            <p>{this.props.description}</p>
                            {this.state.alert}
                            {this.state.alert2}
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="contained" color="secondary" onClick={this.handleBanUser}>
                            Ban user
                        </Button>
                        <Button variant="contained" onClick={this.handleChangeStatus}>
                            Mark as Handled
                        </Button>
                        <Button variant="contained" color="primary" onClick={this.handleContactUser}>
                            Contact User
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    <Modal style={{marginTop: '30px', marginBottom: '50px'}} show={this.state.show} onHide={this.handleChatClose}>
                        {chatWindow}
                    </Modal>
                </Grid>
            </Paper>
        );
    }
};

const mapStateToProps = state => {
    return {
        email: state.email,
        chatToken: state.chatToken
        
    }
}

export default connect(mapStateToProps,null)(Report);