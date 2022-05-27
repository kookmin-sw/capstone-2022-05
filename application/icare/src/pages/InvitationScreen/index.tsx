import {useNavigation} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import styled from 'styled-components/native';
import {View, Text, Image} from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../../RootStackParams';
import * as style from './styles';
import LabelButton from '../../components/LabelButton';
import LabelInput from "../../components/LabelInput"
import {postMappingRequest} from '../../api/babysitter'
type mainScreenProp = StackNavigationProp<RootStackParamList, 'Invitation'>;

const InvitationScreen: FC  = (props) => {
  const navigation = useNavigation<mainScreenProp>();
  const [email, setEmail] = useState('');
  const requestMapping = () => {
      postMappingRequest(props.route.params.userId, email)
  }
  return (
    <style.Container>
      <style.LogoView>
        <Image source={require('../../../public/img/logo_92.png')} />
      </style.LogoView>
      <View style={{width: '80%'}}>
        <LabelInput label="초대코드를 입력해주세요" function_state={email} function={setEmail}/>
      </View>
      <LabelBtn color="#AEC4BA" onPress={() => {requestMapping(); navigation.navigate('BSMain')}}>
          <LabelBtnText>초대하기</LabelBtnText>
      </LabelBtn>
        <View style={{height:60}}/>
    </style.Container>
  )
};
export default InvitationScreen;

const LabelBtn = styled.TouchableOpacity<{color: string}>`
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color || "#AEC4BA"};
    padding: 16px;
    border-radius: 10px;
    box-shadow: 0 2px rgba(0, 0, 0, .1);
`;

const LabelBtnText = styled.Text`
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
`;