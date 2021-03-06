import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import { View } from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../../RootStackParams';
import * as style from './styles';
import LabelButton from '../../components/LabelButton';
import ChattingBtn from '../../components/ChattingBtn';
import {getBabysitterMapping} from "../../api/babysitter";
import axios from "axios";
import {_getData} from "../../api/users";

type mainScreenProp = StackNavigationProp<RootStackParamList, 'BSMain'>;

const BSMainScreen: FC  = () => {
  const [Id, setID] = useState(0);
  const [Token, setToken] = useState('');
  useEffect(() => {
      _getData('jobId', setID);
  });
    useEffect(() => {
        getBabysitterMapping(Id, setBabys);
    },[Id, Token])

  const [Babys, setBabys] = useState([]);
  const navigation = useNavigation<mainScreenProp>();
  return (
    <style.Container>
      {Babys.length > 0 ?
        <style.BabyList>
          {Babys.map((e) => (
            <style.babyElem onPress={() => navigation.navigate('BabyIndi', {state: {mappingId:e.mappingId, parentId:e.parent.parentId}})}>
              <style.babyPhoto source={require('../../../public/img/logo_92_img.png')} />
              <style.lightText>{e.parent.babyName}</style.lightText>
            </style.babyElem>
          ))}
        </style.BabyList>
      :
        <style.LogoView>
          <style.lightText>아직 돌보는 아이가 없어요</style.lightText>
          <style.Logo source={require('../../../public/img/logo_92_img.png')}/>
        </style.LogoView>
      }
      <style.PlusBaby onPress={() => navigation.navigate('Invitation', {userId: Id})}>
        <style.plusIcon source={require('../../../public/img/plusIcon.png')}/>
      </style.PlusBaby>
      <style.NextPage>
        <View style={{ marginBottom: 28 }}>
          <LabelButton label="내 정보" navigate='DisplayInfoBS'/>
        </View>
        <LabelButton label="근무일지 확인하기" navigate='Calendar'/>
      </style.NextPage>
        <View style={{height:60}}/>
    </style.Container>
  );
}

export default BSMainScreen;