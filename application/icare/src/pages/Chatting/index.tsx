import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState, useCallback} from 'react';
import { GiftedChat } from 'react-native-gifted-chat'
interface IMessage {
  _id: string | number
  text: string
  createdAt: Date | number
  user?: User
  image?: string
  video?: string
  audio?: string
  system?: boolean
  sent?: boolean
  received?: boolean
  pending?: boolean
  quickReplies?: QuickReplies
}

interface User {
  _id: number,
  name: string,
  avatar: string,
}
interface Reply {
  title: string
  value: string
  messageId?: any
}
interface QuickReplies {
  type: 'radio' | 'checkbox'
  values: Reply[]
  keepIt?: boolean
}

const ChattingScreen: FC  = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 0,
        text: 'New room created.',
        createdAt: new Date().getTime(),
        system: true
      },
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, []);
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, []);

  return(
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
};

export default ChattingScreen;
