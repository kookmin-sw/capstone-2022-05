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

const EditInfoParent: FC = () => {
    // const navigation = useNavigation<registerScreenProp>();
    return (
        <style.scrollViewContainer>
            <style.editInfoContainer>
                <style.editInfoLogo>
                    <Image source = {require("../../../../public/img/logo_92.png")}/>
                </style.editInfoLogo>
                <style.editInfoInputBox>
                    <LabelInput label="아기 이름" />
                    <SelectDate label="아기 출생일" />
                    <LabelRadio title="아기 성별" label1='남자' label2='여자'/>
                    <LabelInput label="거주 지역" />
                    <LabelTextarea label="아기 특이사항"/>
                </style.editInfoInputBox>
                <style.editInfoButtonBox>
                    <LabelButton label="수정 완료"/>
                </style.editInfoButtonBox>
            </style.editInfoContainer>
        </style.scrollViewContainer>
    );
}

export default EditInfoParent;