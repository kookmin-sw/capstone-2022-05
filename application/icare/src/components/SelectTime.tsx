import React, {FC, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import styled from 'styled-components/native';
import DatePicker from 'react-native-date-picker'

interface SelectTimeProps {
    time: Date,
    setTime: (time: Date) => void,
    close(): void
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
const BottomSection = styled.View`
  position: absolute;
  bottom: 0;
  flex: 1;
  width: 100%;
  background: #fff;
  z-index: 2;
  justify-content: center;
  align-items: center;
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