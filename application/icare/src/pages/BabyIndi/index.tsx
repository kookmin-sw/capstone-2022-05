import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {View, Text, Image, Modal, TouchableOpacity, Alert} from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../../RootStackParams';
import * as style from './styles';
import LabelButton from '../../components/LabelButton';
import AlarmModal from "../../components/AlarmModal";
import { getParentInfo } from "../../api/parents"
import { getSensor, setSensorFalse } from "../../api/babysitter"

type mainScreenProp = StackNavigationProp<RootStackParamList, 'BSMain'>;

const BabyIndiScreen: FC  = (props) => {
  console.log(props.route.params.state);
  const [BabyInfo, setBabyInfo] = useState({
    babyName: "",
    babyBirth: "",
    babyGender: "",
    region: "",
    career: ""
  });
  const [mappingId, setMappinId] = useState(props.route.params.state.mappingId);
  const [AlertModal, setAlertModal] = useState(false);
  const [working, setWork] = useState(false);
  const [AlarmModalState, setAlarmModalState] = useState(false);
  const [sensor, setSensor] = useState(false);
  const [alarmId, setAlarmId] = useState(0);
  const navigation = useNavigation<mainScreenProp>();
  const modalControl = () => {
    setAlertModal(!AlertModal);
  }
  const workControl = () => {
    if (working) {
      navigation.navigate('WorkDiary');
    }
    else setWork(!working);
  }
  const AlarmModalControl = () => {
    setAlarmModalState(!AlarmModalState)
  }

  const IotAlert = () => {
    Alert.alert(
      "아이의 기저귀를 확인해주세요",
      "아이가 용변을 보았나요?",
      [
        {
          text: "아니요",
          style: "cancel",
          onPress : () => {setSensorFalse()}
        },
        {
          text: "네",
          onPress : () => {setSensorFalse()}
        }
      ]
    )
  }

  useEffect(() => {
    getParentInfo(props.route.params.state.parentId, setBabyInfo)
  }, [])

  return (
    <style.Container>
      {AlertModal ?
        <style.AlertModal>
          <style.ModalContainer>
            <style.CloseBtn onPress={modalControl}><style.CloseText>X</style.CloseText></style.CloseBtn>
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
      {AlarmModalState ?
        <AlarmModal closeEvent={AlarmModalControl} alarmId={alarmId}/>
        :null
      }
      <style.InfoView>
        <style.Profile>
          <style.ProfilePhoto source={require('../../../public/img/logo_92_img.png')}/>
          <style.ProfileInfo>
            <style.StrongText style={{ textAlign: 'center' }}>{BabyInfo.babyName}</style.StrongText>
            <style.LightText style={{ textAlign: 'center' }}>{BabyInfo.babyGender == 'male' ? '남성 / ' : '여성 / ' }{BabyInfo.babyBirth}</style.LightText>
            <style.Workbutton onPress={workControl}>
              <style.LabelBtnText>{working? '퇴근하기' : '출근하기'}</style.LabelBtnText>
            </style.Workbutton>
          </style.ProfileInfo>
        </style.Profile>
        <style.DetailInfo>
          <style.LightText style={{ fontWeight: '600' }}>상세 정보</style.LightText>
          <style.DetailText>{BabyInfo.career}</style.DetailText>
        </style.DetailInfo>
      </style.InfoView>
      <style.AlertView>
        <style.LightText style={{ fontWeight: '600' }}>알림 보내기</style.LightText>
        <style.AlertBtn onPress={() => {AlarmModalControl(); setAlarmId(1)}}>
          <Text>밥 먹었어요 🍼</Text>
          <style.sendIcon source={require('../../../public/img/sendIcon.png')}/>
        </style.AlertBtn>
        <style.AlertBtn onPress={() => {AlarmModalControl(); setAlarmId(2)}}>
          <Text>자는중이에요 💤</Text>
          <style.sendIcon source={require('../../../public/img/sendIcon.png')}/>
        </style.AlertBtn>
        <style.AlertBtn onPress={() => {AlarmModalControl(); setAlarmId(3)}}>
          <Text>응가 했어요 💩</Text>
          <style.sendIcon source={require('../../../public/img/sendIcon.png')}/>
        </style.AlertBtn>
        <style.AlertBtn onPress={() => {AlarmModalControl(); setAlarmId(4)}}>
          <Text>목욕 했어요 🛁</Text>
          <style.sendIcon source={require('../../../public/img/sendIcon.png')}/>
        </style.AlertBtn>
        <style.SensorBtn onPress={() => {getSensor(setSensor); IotAlert()}}>
        </style.SensorBtn>
        {/* <style.AlertBtn onPress={modalControl}>
          <Text>기타 알림 사항 보내기</Text>
          <style.sendIcon source={require('../../../public/img/sendIcon.png')}/>
        </style.AlertBtn> */}
      </style.AlertView>
    </style.Container>
  )
};

export default BabyIndiScreen;