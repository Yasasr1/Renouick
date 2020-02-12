import React from 'react';
import { Chat, Channel, ChannelHeader, Thread, Window } from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const client = new StreamChat("dmr78d6h89rt");


client.setUser(
  {
      id: 'jlahey',
      name: 'Jim Lahey',
      image: 'https://i.imgur.com/fR9Jz14.png',
  },
  client.devToken('jlahey'),
);

const channel = client.channel('messaging', 'godevs', {
  // add as many custom fields as you'd like
  image: 'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
  name: 'Talk about Go',
});

const ChatComponent = () => {
  return(
    <div style={{marginLeft: '80px', marginTop: '60px'}}>
        <Chat client={client} theme={'messaging light'}>
    <Channel channel={channel}>
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

export default ChatComponent;