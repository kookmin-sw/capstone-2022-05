import React, {FC, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import styled from 'styled-components/native';
import DatePicker from 'react-native-date-picker'

interface SelectTimeProps {
    time: Date,
    //close는 먹는데 setTime은 안먹음 ㅎㅎ !!ㅋㅋ~!~
    setTime(): void,
    close() : void
}
const SelectTime: FC<SelectTimeProps> = (props) => {
    return(
        <BottomSection>
        <CompleteBtn onPress={props.close}>
            <CompleteText>완료</CompleteText>
        </CompleteBtn>
        <View>
            <DatePicker
              date={props.time}
              onDateChange={props.setTime}
              mode="time"
              locale="ko"
            />
        </View>
        </BottomSection>
    );
};
//이것도 수정해야됨,, 따흐흐흑
const BottomSection = styled.View`
  position: absolute;
  bottom: -200px;
  flex: 1;
  background: #fff;
`;
const CompleteBtn = styled.TouchableOpacity`
  background-color: #AEC4BA;
  right: 0;
  height: 30px;
  margin-left: 80%;
  width: 20%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const CompleteText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: 400;
`;
export default SelectTime;