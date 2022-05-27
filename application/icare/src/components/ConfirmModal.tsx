import React, {FC, useEffect, useState} from 'react';
import {View, Text, Image, Modal, TouchableOpacity} from "react-native";
import styled from 'styled-components/native';
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../RootStackParams";

interface ConfirmModalProps {
  close(): void
}
type mainScreenProp = StackNavigationProp<RootStackParamList, 'BSMain'>;

const ConfirmModal: FC<ConfirmModalProps> = (props) => {
  const navigation = useNavigation<mainScreenProp>();
  return(
    <ModalBg>
      <ModalView>
        <Logo source={require('../../public/img/logo_50.png')} />
          <NoticeText>소중한 아이를 위해 </NoticeText>
          <NoticeText>입력하신 내용을 한번 더 확인해주세요!</NoticeText>
          <BtnView>
            <ModalBtn onPress={() => navigation.navigate('BSMain')}>
              <BtnLabel>저장</BtnLabel>
            </ModalBtn>
            <ModalBtn onPress={props.close}>
              <BtnLabel>취소</BtnLabel>
            </ModalBtn>
          </BtnView>
      </ModalView>
    </ModalBg>
  )
}

const ModalBg = styled.View`
  position: absolute;
  flex: 1;
  height: 100%;
  z-index: 1;
  background: rgba(0,0,0,0.16);
  width: 100%;
`;
const ModalView = styled.View`
  position: absolute;
  background: #ffffff;
  width: 80%;
  padding: 8px 0 20px 0;
  top: 30%;
  left: 10%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.Image`
  width: 50px;
  height: 58px;
`;
const NoticeText = styled.Text`
  font-size: 16px;
  font-weight: 200;
  color: #000;
  margin-top: 4px;
`;
const BtnView = styled.View`
  width: 60%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;
const ModalBtn = styled.TouchableOpacity`
  background: #AEC4BA;
  box-shadow: 0 4px rgba(0,0,0,0.1);
  border-radius: 10px;
  width: 84px;
  padding: 8px 26px;
  text-align: center;
`;
const BtnLabel = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
`;
export default ConfirmModal;