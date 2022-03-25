import React, { FC } from 'react';
import { Image } from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../RootStackParams';
import LabelInput from "../../../components/LabelInput"
import SelectDate from "../../../components/SelectDate"
import LabelRadio from "../../../components/LabelRadio"
import LabelButton from "../../../components/LabelButton"
import LabelTextarea from "../../../components/LabelTextarea"
import * as style from "./style"

// type registerScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

const SetInfoBS: FC = () => {
    // const navigation = useNavigation<registerScreenProp>();
    return (
        <style.scrollViewContainer>
            <style.setInfoContainer>
                <style.setInfoLogo>
                    <Image source = {require("../../../../public/img/logo_92.png")}/>
                </style.setInfoLogo>
                <style.setInfoInputBox>
                    <SelectDate label="생년월일" />
                    <LabelRadio title="성별" label1='남자' label2='여자'/>
                    <LabelInput label="거주 지역" />
                    <LabelTextarea label="자기소개/경력" placeholder="자기소개 및 경력을 입력해주세요."/>
                </style.setInfoInputBox>
                <style.setInfoButtonBox>
                    <LabelButton label="입력 완료"/>
                </style.setInfoButtonBox>
            </style.setInfoContainer>
        </style.scrollViewContainer>
    );
}

export default SetInfoBS;