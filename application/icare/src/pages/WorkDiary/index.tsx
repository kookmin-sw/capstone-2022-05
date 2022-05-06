import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {View, Text, Image, Modal, TouchableOpacity} from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../../RootStackParams';
import * as style from './styles';
import LabelButton from '../../components/LabelButton';
import ConfirmModal from '../../components/ConfirmModal';
import {Container, LightText, MsgInput} from "../BabyIndi/styles";
import {postWorkDiary} from '../../api/babysitter'
type mainScreenProp = StackNavigationProp<RootStackParamList, 'BSMain'>;

const WorkDiaryScreen: FC  = () => {
  const navigation = useNavigation<mainScreenProp>();
  const TemplateList = ['오늘은 밥을 덜 먹었어요','오늘은 낮잠을 안잤어요'];
  const [Notice, setNotice] = useState('');
  const [PhotoList, setPhotoList] = useState([]);
  const [modal, setModal] = useState(false);
  const AddPhoto = () => {
    setPhotoList([...PhotoList.concat(require('../../../public/img/logo_92_img.png'))])
  }
  const ControlModal = () => {
    postWorkDiary(1,Notice)
    setModal(!modal);
  }
  return(
    <Container>
      {modal ?
      <ConfirmModal close={ControlModal}/>
      : null}
      <style.NoticeView>
        <LightText style={{ fontWeight: '600' }}>오늘의 특이사항</LightText>
        <MsgInput placeholder="오늘의 특이사항을 입력해주세요" multiline numberOfLines={4} value={Notice} onChangeText={setNotice} />
        <style.TextTemplate>
          {TemplateList.map((t) => (
              <style.Templates>
                <Text>{t}</Text>
              </style.Templates>
          ))}
        </style.TextTemplate>
      </style.NoticeView>
      <style.PhotoAttach>
        <LightText style={{ fontWeight: '600' }}>사진 첨부하기</LightText>
        <style.AttachBtn onPress={AddPhoto}>
          <style.AttachText>+</style.AttachText>
        </style.AttachBtn>
        <style.PhotoView>
          {PhotoList.map((p) => (
            <style.Photos source={p} />
          ))}
        </style.PhotoView>
      </style.PhotoAttach>
      <style.ButtonView onPress={ControlModal}>
        <Text>퇴근하기</Text>
        {/*<LabelButton label="퇴근하기" />*/}
      </style.ButtonView>
      <style.ButtonView onPress={() => {navigation.goBack()}}>
        <LabelButton label="취소" />
      </style.ButtonView>
      {/* 야매로 아래에 공간을 만듬..이거 어케해결함 ㅜ */}
      <View style={{flex: 1, marginBottom: PhotoList.length != 0 ? '45%' : '80%'}} />
    </Container>
  )
}
export default WorkDiaryScreen;