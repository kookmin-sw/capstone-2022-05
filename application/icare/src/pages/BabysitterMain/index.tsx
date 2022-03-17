import {useNavigation} from '@react-navigation/native';
import React, { FC }  from 'react';
import { View } from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../../RootStackParams';
import * as style from './styles';
import LabelButton from '../../components/LabelButton';

type mainScreenProp = StackNavigationProp<RootStackParamList, 'BSMain'>;

const BSMainScreen: FC  = () => {
  const navigation = useNavigation<mainScreenProp>();
  return (
    <style.Container>
      <style.LogoView>
        <style.LogoTopMsg>아직 돌보는 아이가 없어요</style.LogoTopMsg>
        <style.Logo source={require('../../../public/img/logo_92.png')} />
      </style.LogoView>
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