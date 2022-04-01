import React, { FC } from 'react';
import { Image } from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../RootStackParams';
import LabelInfo from "../../../components/LabelInfo"
import LabelButton from "../../../components/LabelButton"
import * as style from "./style"

// type registerScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

const DisplayInfoParent: FC = () => {
    // const navigation = useNavigation<registerScreenProp>();
    return (
        <style.scrollViewContainer>
            <style.displayInfoContainer>
                <style.displayInfoLogo>
                    <Image source = {require("../../../../public/img/logo_92.png")}/>
                </style.displayInfoLogo>
                <style.displayInfoInputBox>
                    <LabelInfo label="아기 이름" content="김응애"/>
                    <LabelInfo label="아기 출생일" content="2020.01.09"/>
                    <LabelInfo label="아기 성별" content="남자"/>
                    <LabelInfo label="거주 지역" content="서울특별시 성북구"/>
                    <LabelInfo label="아기 특이사항" content="우리 아이는 배고프면 예민해요. 밥 때를 잘 챙겨주세요. 우리 아이는 배고프면 예민해요. 밥 때를 잘 챙겨주세요. 우리 아이는 배고프면 예민해요. 밥 때를 잘 챙겨주세요."/>
                </style.displayInfoInputBox>
                <style.displayInfoButtonBox>
                    <LabelButton label="수정 하기"/>
                </style.displayInfoButtonBox>
            </style.displayInfoContainer>
        </style.scrollViewContainer>
    );
}

export default DisplayInfoParent;