import {useNavigation} from '@react-navigation/native';
import React, {FC, useState} from 'react';
import {View, Text, Image, Modal} from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../../RootStackParams';
import * as style from './styles';
import LabelButton from '../../components/LabelButton';

type mainScreenProp = StackNavigationProp<RootStackParamList, 'BSMain'>;

const BabyIndiScreen: FC  = () => {
  const [BabyInfo, setBabyInfo] = useState({'name': '김하율', 'photo': '', 'id': 1, 'gender': 'female', 'age': '8개월', 'detail': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'});
  const [AlertModal, setAlertModal] = useState(false);
  const [working, setWork] = useState(false);
  const navigation = useNavigation<mainScreenProp>();
  const modalControl = () => {
    setAlertModal(!AlertModal);
  }
  const workControl = () => {
    setWork(!working);
  }
  return (
    <style.Container>
      {AlertModal ?
        <style.AlertModal>
          <style.ModalContainer>
            <style.LightText style={{ fontWeight: '600' }}>기타 알림 사항을 입력해주세요</style.LightText>
            <style.MsgInput placeholder="기타 알림 사항을 입력해 주세요"
                            multiline
                            numberOfLines={4}/>
            <style.ModalBtnView>
              <style.ModalBtn style={{ backgroundColor : '#C4C4C4', marginRight: 20 }} onPress={modalControl}>
                <style.BtnLabel>취소</style.BtnLabel>
              </style.ModalBtn>
              <style.ModalBtn style={{ backgroundColor : '#AEC4BA' }}>
                <style.BtnLabel>전송하기</style.BtnLabel>
              </style.ModalBtn>
            </style.ModalBtnView>
          </style.ModalContainer>
        </style.AlertModal>
      :null
      }
      <style.InfoView>
        <style.Profile>
          <style.ProfilePhoto source={BabyInfo.photo != '' ? BabyInfo.photo : require('../../../public/img/logo_92.png')} />
          <style.ProfileInfo>
            <style.StrongText style={{ textAlign: 'center' }}>{BabyInfo.name}</style.StrongText>
            <style.LightText style={{ textAlign: 'center' }}>{BabyInfo.gender == 'male' ? '남성 / ' : '여성 / ' }{BabyInfo.age}</style.LightText>
            <LabelButton label={working? '퇴근하기' : '출근하기'} />
          </style.ProfileInfo>
        </style.Profile>
        <style.DetailInfo>
          <style.LightText style={{ fontWeight: '600' }}>상세 정보</style.LightText>
          <style.DetailText>{BabyInfo.detail}</style.DetailText>
        </style.DetailInfo>
      </style.InfoView>
      <style.AlertView>
        <style.LightText style={{ fontWeight: '600' }}>알림 보내기</style.LightText>
        <style.AlertBtn>
          <Text>밥 먹었어요 🍼</Text>
          <style.sendIcon source={require('../../../public/img/sendIcon.png')}/>
        </style.AlertBtn>
        <style.AlertBtn>
          <Text>자는중이에요 💤</Text>
          <style.sendIcon source={require('../../../public/img/sendIcon.png')}/>
        </style.AlertBtn>
        <style.AlertBtn>
          <Text>응가 했어요 💩</Text>
          <style.sendIcon source={require('../../../public/img/sendIcon.png')}/>
        </style.AlertBtn>
        <style.AlertBtn>
          <Text>목욕 했어요 🛁</Text>
          <style.sendIcon source={require('../../../public/img/sendIcon.png')}/>
        </style.AlertBtn>
        <style.AlertBtn onPress={modalControl}>
          <Text>기타 알림 사항 보내기</Text>
          <style.sendIcon source={require('../../../public/img/sendIcon.png')}/>
        </style.AlertBtn>
      </style.AlertView>
    </style.Container>
  )
};

export default BabyIndiScreen;