import React from 'react';
import { Chat, Channel, ChannelHeader, Thread, Window, ChannelList } from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import {connect} from 'react-redux';

import 'stream-chat-react/dist/css/index.css';



const ChatComponent = (props) => {
  //client = stream.connect('dmr78d6h89rt', null, '68343');
  const client = new StreamChat("vfkm5qedxex3");
  const userToken = props.chatToken;

  const email = props.email;
  var n = email.indexOf("@");
  var name = email.slice(0, n);
  console.log(name);

  //client.disconnect();
  client.setUser(
    {
        id: name,
        name: name,
        image: 'https://i.imgur.com/fR9Jz14.png',
    },
    userToken,
  );

  /*const conversation = client.channel('messaging', 'new-chat3', {
    name: 'Chat',
    image: 'http://bit.ly/2O35mws',
});*/

 const filters = { type: 'messaging'};
const sort = { last_message_at: -1 };
const channels = client.queryChannels(filters, sort);




  return(
    <div style={{marginLeft: '100px',marginTop: '50px'}}>
        <Chat client={client} theme={'messaging light'}>
        <ChannelList filters={filters} sort={sort}/>
          <Channel>
            <Window>
              <ChannelHeader />
              <MessageList />
              <MessageInput />
            </Window>
            <Thread />
          </Channel>
      </Chat>
    </div>
    
  );
  
};

const mapStateToProps = state => {
  return {
      email: state.email,
      token: state.token,
      chatToken: state.chatToken
      
  }
}

export default connect(mapStateToProps,null)(ChatComponent);