import {useNavigation} from '@react-navigation/native';
import React, { FC }  from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../../RootStackParams';
import * as style from './style';
import { Text } from 'react-native';

type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;

const BSMainScreen: FC  = () => {
  const navigation = useNavigation<mainScreenProp>();
  return (
    <style.Container>
      <style.LogoView>
        <style.LogoTopMsg>아직 돌보는 아이가 없어요</style.LogoTopMsg>
        <style.Logo source={require('../../../public/img/logo_92.png')} />
      </style.LogoView>
      <style.PlusBaby onPress={() => navigation.goBack()}>
        <style.plusIcon source={require('../../../public/img/plusIcon.png')}/>
      </style.PlusBaby>
      <style.NextPage>

      </style.NextPage>
    </style.Container>
  );
}

export default BSMainScreen;