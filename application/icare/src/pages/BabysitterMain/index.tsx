import {useNavigation} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import { View } from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../../RootStackParams';
import * as style from './styles';
import LabelButton from '../../components/LabelButton';

type mainScreenProp = StackNavigationProp<RootStackParamList, 'BSMain'>;

const BSMainScreen: FC  = () => {
  // const [Babys, setBabys] = useState([]);
  const [Babys, setBabys] = useState([{'name': '김하율', 'photo': '', 'id': 1}, {'name': '이준후', 'photo': '', 'id': 2}, {'name': '박가람', 'photo': '', 'id': 3}, {'name': '최예나', 'photo': '', 'id': 4}]);
  const navigation = useNavigation<mainScreenProp>();
  return (
    <style.Container>
      {Babys.length > 0 ?
        <style.BabyList>
          {Babys.map((e) => (
            <style.babyElem onPress={() => navigation.navigate('BabyIndi')}>
              <style.babyPhoto source={e.photo != '' ? e.photo : require('../../../public/img/logo_92.png')} />
              <style.lightText>{e.name}</style.lightText>
            </style.babyElem>
          ))}
        </style.BabyList>
      :
        <style.LogoView>
          <style.lightText>아직 돌보는 아이가 없어요</style.lightText>
          <style.Logo source={require('../../../public/img/logo_92.png')}/>
        </style.LogoView>
      }
      <style.PlusBaby onPress={() => navigation.navigate('Invitation')}>
        <style.plusIcon source={require('../../../public/img/plusIcon.png')}/>
      </style.PlusBaby>
      <style.NextPage>
        <View style={{ marginBottom: 28 }}>
          <LabelButton label="내 정보" />
        </View>
        <LabelButton label="근무일지 확인하기" />
      </style.NextPage>
    </style.Container>
  );
}

export default BSMainScreen;