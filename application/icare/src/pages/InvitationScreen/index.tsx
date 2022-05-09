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

const InvitationScreen: FC  = () => {
  const navigation = useNavigation<mainScreenProp>();
  const [eamil, setEmail] = useState('');
  const requestMapping = () => {
      postMappingRequest(1, eamil)
  }
  return (
    <style.Container>
      <style.LogoView>
        <Image source={require('../../../public/img/logo_92.png')} />
      </style.LogoView>
      <style.LabelComponent>
        <LabelInput label="초대코드를 입력해주세요" />
      </style.LabelComponent>
      <style.LabelComponent>
        <LabelButton label="입력완료" />
      </style.LabelComponent>
    </style.Container>
  )
};
export default InvitationScreen;