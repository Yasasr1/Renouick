import React from 'react';
import { Chat, Channel, ChannelHeader, Thread, Window, ChannelList } from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import {connect} from 'react-redux';

import 'stream-chat-react/dist/css/index.css';



const ChatComponent = (props) => {
  const client = new StreamChat("vpwfkwnszegg");
  const userToken = props.chatToken;

  const email = props.email;
  var n = email.indexOf("@");
  var name = email.slice(0, n);
  //console.log(name);

  //client.disconnect();
  client.setUser(
    {
        id: name,
        name: name,
        image: 'https://i.imgur.com/fR9Jz14.png',
    },
    userToken,
  );

  const filter = { type: 'messaging', members: { $in: ['yasas'] } };
  const sort = { last_message_at: -1 };

  const channels = client.queryChannels(filter, sort, {
      watch: true,
      state: true,
  });

  /*const conversation = client.channel('messaging', 'new-chat', {
    name: 'Chat',
    image: 'http://bit.ly/2O35mws',
});*/


  return(
    <div style={{margin: '100px'}}>
      <h6>t</h6>
        <Chat client={client} theme={'messaging light'}>
          <ChannelList 
          filters={filter}
          sort={sort}/>
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