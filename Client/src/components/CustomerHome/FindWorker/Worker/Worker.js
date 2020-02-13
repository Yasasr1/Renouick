import React, { useState } from 'react';
import { Paper, Grid, Typography, Divider,Fab } from '@material-ui/core';
import { Modal } from 'react-bootstrap';
import WorkIcon from '@material-ui/icons/Work';
import TodayIcon from '@material-ui/icons/Today';
import StarIcon from '@material-ui/icons/Star';
import PhoneIcon from '@material-ui/icons/Phone';
import ChatIcon from '@material-ui/icons/Chat';
import { connect } from 'react-redux';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, Thread, Window, MessageList, MessageInput } from 'stream-chat-react';


const Worker = (props) => {

    //calculate age
    let today = new Date();
    let birthday = new Date(props.date);
    let age = today.getFullYear() - birthday.getFullYear();
    let month = today.getMonth() - birthday.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }

    //calculate rating
    const rating = props.totalStars / props.numberOfRatings;
    const fixedRating = rating.toFixed(2);
    console.log(rating);

    //render the professions to a list
    const profession = props.profession.map(p => {
        return <li key={p}>{p}</li>
    })
    
    //popup
    const [show, setShow] = useState(false);

    const handlePopupClose = () => {
        setShow(false)
    };
    const handlePopupShow = () => {
        setShow(true)

    };

    //chat
    const client = new StreamChat("vfkm5qedxex3");
    const userToken = props.chatToken;

    const workeremail = props.workerEmail;
    var n = workeremail.indexOf("@");
    var workername = workeremail.slice(0, n);
    //console.log(name);

    const customeremail = props.email;
    var m = customeremail.indexOf("@");
    var customername = customeremail.slice(0, m);

    var channelName = workername.concat('-',customername);
    //console.log(channelName);

    //client.disconnect();
    client.setUser(
        {
            id: customername,
            name: customername,
            image: 'http://bit.ly/2O35mws'
        },
        userToken,
    );

    const conversation = client.channel('messaging', channelName, {
        name: channelName,
        image: 'http://bit.ly/2O35mws',
        members: [workername, customername]
    });


    //for holding the chat window

    let chatWindow;
    if(show === false){
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
        <Paper className="shadow p-3 mb-5 bg-white rounded" style={{padding: '20px', margin: '20px'}}>
             <Grid container spacing={1}>
                <Grid item md={3}>
                    <br/>
                    {props.profilePic !== "" ? <img src={props.profilePic} alt="profilepic"
                    style={{width: '70%', height: 'inherent', borderRadius: '8px' }}
                    ></img>
                    : <p>No Photo</p>}
                </Grid>
                <Grid item md={9}>
                    <Typography variant="h6" align="center">{props.fName} {props.lName}</Typography>
                    <Divider/>
                    <br/>
                    <Grid container spacing={1}>
                        <Grid item md={1}>
                            <WorkIcon/>
                        </Grid>
                        <Grid item md={2}>
                            <Typography variant="overline">Profession</Typography>
                        </Grid>
                        <Grid item md={9}>
                            <ul>
                                {profession}
                            </ul>
                        </Grid>
                        <Grid item md={1}>
                            <TodayIcon/>
                        </Grid>
                        <Grid item md={2}>
                        <Typography variant="overline">Age</Typography>
                        </Grid>
                        <Grid item md={9}>
                            <Typography variant="overline">:{age}</Typography>
                        </Grid>
                        <Grid item md={1}>
                            <StarIcon/>
                        </Grid>
                        <Grid item md={2}>
                        <Typography variant="overline">Rating</Typography>
                        </Grid>
                        <Grid item md={9}>
                            <Typography variant="overline">:{fixedRating}</Typography>
                        </Grid>

                        <Grid item md={1}>
                            <PhoneIcon/>
                        </Grid>
                        <Grid item md={2}>
                        <Typography variant="overline">Contact No</Typography>
                        </Grid>
                        <Grid item md={9}>
                            <Typography variant="overline">:0714683450</Typography>
                        </Grid>
                    </Grid>
                    <Fab style={{float: 'right'}} onClick={handlePopupShow} color="primary" aria-label="add">
                        <ChatIcon />
                    </Fab>
                    <Modal style={{marginTop: '30px', marginBottom: '50px'}} show={show} onHide={handlePopupClose}>
                        {chatWindow}
                    </Modal>
                </Grid>

             </Grid>
        </Paper>
    );
};

const mapStateToProps = state => {
    return {
        email: state.email,
        chatToken: state.chatToken,
        
    }
}

export default connect(mapStateToProps,null)(Worker);