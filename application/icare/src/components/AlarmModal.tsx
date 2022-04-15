import React, {FC, useEffect, useState} from 'react';
import {Text} from "react-native";
import styled from 'styled-components/native';
import SelectTime from './SelectTime';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../RootStackParams';

interface AlarmModal {
    closeEvent() : void
}

type mainScreenProp = StackNavigationProp<RootStackParamList, 'BSMain'>;

const AlarmModal: FC<AlarmModal> = (props) => {
  const [start, setStart] = useState(new Date())
  const [end, setEnd] = useState(new Date())
  const [timeset, setTimeset] = useState(false);
  const constTimeSet = () => {
      setTimeset(!timeset)
  }
  const navigation = useNavigation<mainScreenProp>();
  return(
    <ModalView>
      <CloseBtn onPress={props.closeEvent}><CloseText>X</CloseText></CloseBtn>
      <ModalTitle>
        알림을 보내시겠습니까 ?
      </ModalTitle>
      <TimeStampView>
        <TimeView onPress={constTimeSet}>
          <Text>시작 시간</Text>
          <TimeText>{start.getHours() + ' : ' + start.getMinutes()}</TimeText>
        </TimeView>
        <Text style={{marginTop: 30, fontSize: 20}}> ~ </Text>
        <TimeView onPress={constTimeSet}>
          <Text>종료 시간</Text>
          <TimeText>{start.getHours() + ' : ' + start.getMinutes()}</TimeText>
        </TimeView>
      </TimeStampView>
      <SendBtnView>
        <SendBtn style={{ backgroundColor: '#c4c4c4'}} onPress={() => {navigation.navigate('Camera')}}>
          <SendText>사진 보내기</SendText>
        </SendBtn>
        <SendBtn style={{ backgroundColor: '#aec4ba'}}>
          <SendText>텍스트만 보내기</SendText>
        </SendBtn>
      </SendBtnView>
      {/* 나중에 end 값도 보내게 수정해야함........어렵다 타입스크립트... */}
      {timeset ? <SelectTime time={start} setTime={()=>{setStart}} close={constTimeSet}/> : null}
    </ModalView>
  )
}
const ModalView = styled.View`
  z-index: 1;
  width: 80%;
  margin: 0 10%;
  background-color: #fff;
  border-radius: 10px;
  padding: 40px 20px 20px 20px;
  position: relative;
`;
const CloseBtn = styled.TouchableOpacity`
  top: 10px;
  right: 20px;
  position: absolute;
`;
const CloseText = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;
const ModalTitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 20px;
`;
const TimeStampView = styled.View`
  width: 100%;
  border: #dbdbdb 1px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
`;
const TimeView = styled.TouchableOpacity`
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const TimeText = styled.Text`
  margin-top: 10px;
  border: 1px solid #000;
  padding: 10px 20px;
`;
const SendBtnView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;
const SendBtn = styled.TouchableOpacity`
  height: 40px;
  width: 45%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 4px rgba(0, 0, 0, .1);
`;
const SendText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;
export default AlarmModal;