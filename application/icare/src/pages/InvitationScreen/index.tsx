import {useNavigation} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import {View, Text, Image} from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../../RootStackParams';
import * as style from './styles';
import LabelButton from '../../components/LabelButton';
import LabelInput from "../../components/LabelInput"
import {postMappingRequest} from '../../api/babysitter'
type mainScreenProp = StackNavigationProp<RootStackParamList, 'Invitation'>;

const InvitationScreen: FC  = (props) => {
    console.log(props)
  const navigation = useNavigation<mainScreenProp>();
  const [email, setEmail] = useState('');
  const requestMapping = () => {
      postMappingRequest(props.route.params.userId, email)
  }
  console.log(email)
  return (
    <style.Container>
      <style.LogoView>
        <Image source={require('../../../public/img/logo_92.png')} />
      </style.LogoView>
      <View style={{width: '80%'}}>
        <LabelInput label="초대코드를 입력해주세요" function_state={email} function={setEmail}/>
      </View>
      <style.LabelComponent onPress={requestMapping}>
        <LabelButton label="입력완료" />
      </style.LabelComponent>
    </style.Container>
  )
};
export default InvitationScreen;