import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import { View } from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../../RootStackParams';
import * as style from './styles';
import LabelButton from '../../components/LabelButton';
import {getBabysitterMapping} from "../../api/babysitter";

type mainScreenProp = StackNavigationProp<RootStackParamList, 'BSMain'>;

const BSMainScreen: FC  = () => {
  // const [Babys, setBabys] = useState([]);
  const [sitterId, setSitterId] = useState(1);
  const [Babys, setBabys] = useState([{
      "parentId": 1,
      "babyName": "임창식",
      "babyBirth": "2022-04-30",
      "babyGender": "male",
      "region": "서울특별시",
      "career": "잠만보",
      "createdAt": "2022-04-30T04:57:44.103Z"
  }]);
  useEffect(() => {
      // const list = getBabysitterMapping({
      //     id: sitterId
      // })
      // setBabys(list)
  })
  const navigation = useNavigation<mainScreenProp>();
  return (
    <style.Container>
      {Babys.length > 0 ?
        <style.BabyList>
          {Babys.map((e) => (
            <style.babyElem onPress={() => navigation.navigate("BabyIndi", {id : e.parentId})}>
              {/*<style.babyPhoto source={e.photo != '' ? e.photo : require('../../../public/img/logo_92_img.png')} />*/}
              <style.babyPhoto source={require('../../../public/img/logo_92_img.png')} />
              <style.lightText>{e.babyName}</style.lightText>
            </style.babyElem>
          ))}
        </style.BabyList>
      :
        <style.LogoView>
          <style.lightText>아직 돌보는 아이가 없어요</style.lightText>
          <style.Logo source={require('../../../public/img/logo_92_img.png')}/>
        </style.LogoView>
      }
      <style.PlusBaby onPress={() => navigation.navigate('Invitation')}>
        <style.plusIcon source={require('../../../public/img/plusIcon.png')}/>
      </style.PlusBaby>
      <style.NextPage>
        <View style={{ marginBottom: 28 }}>
          <LabelButton label="내 정보" navigate='DisplayInfoBS'/>
        </View>
        <LabelButton label="근무일지 확인하기" navigate='Calendar'/>
      </style.NextPage>
    </style.Container>
  );
}

export default BSMainScreen;