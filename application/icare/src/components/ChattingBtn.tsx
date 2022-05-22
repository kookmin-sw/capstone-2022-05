import React, {FC, useEffect, useState} from 'react';
import {View, Text, Image, Modal, TouchableOpacity} from "react-native";
import styled from 'styled-components/native';
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../RootStackParams";

type ScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;
const navigation = useNavigation<ScreenProp>();
const ChattingBtn: FC = () => {
    return(
        <ChatIcon onPress={() => {navigation.navigate('Chatting')}} />
    )
};
const ChatIcon = styled.TouchableOpacity`
    background: #00008B;
`;
export default ChattingBtn;