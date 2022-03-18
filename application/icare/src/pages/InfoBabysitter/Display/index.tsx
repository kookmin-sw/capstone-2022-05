import React, { FC } from 'react';
import { Image } from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../RootStackParams';
import LabelInfo from "../../../components/LabelInfo"
import LabelButton from "../../../components/LabelButton"
import * as style from "./style"

// type registerScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

const DisplayInfoBS: FC = () => {
    // const navigation = useNavigation<registerScreenProp>();
    return (
        <style.scrollViewContainer>
            <style.displayInfoContainer>
                <style.displayInfoLogo>
                    <Image source = {require("../../../../public/img/logo_92.png")}/>
                </style.displayInfoLogo>
                <style.displayInfoInputBox>
                    <LabelInfo label="이름" content="김보모"/>
                    <LabelInfo label="나이" content="1980.01.02"/>
                    <LabelInfo label="성별" content="여자"/>
                    <LabelInfo label="거주 지역" content="서울특별시 성북구"/>
                    <LabelInfo label="자기소개/경력" content="베이비시터 경력 3년 / 거주 가능 베이비시터 경력 3년 / 거주 가능 베이비시터 경력 3년 / 거주 가능"/>
                </style.displayInfoInputBox>
                <style.displayInfoButtonBox>
                    <LabelButton label="수정 하기"/>
                </style.displayInfoButtonBox>
            </style.displayInfoContainer>
        </style.scrollViewContainer>
    );
}

export default DisplayInfoBS;