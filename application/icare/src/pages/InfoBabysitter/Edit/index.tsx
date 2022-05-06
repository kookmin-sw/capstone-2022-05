import React, {FC, useEffect, useState} from 'react';
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
import {getBabysitterInfo, patchBabysitterInfo} from "../../../api/babysitter";

// type registerScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

const EditInfoBS: FC = () => {
    // const navigation = useNavigation<registerScreenProp>();
    const [info, setInfo] = useState({age:'', gender:'', region:'', career:'', user:{userName:''}});
    const [edit, setEdit] = useState({})
    useEffect(() => {
        getBabysitterInfo(1, setInfo)
    })
    //edit info change
    const changeEdit = () => {}
    //post edit info
    const completeEdit = () => {
        patchBabysitterInfo(1, edit)
    }
    return (
        <style.scrollViewContainer>
            <style.editInfoContainer>
                <style.editInfoLogo>
                    <Image source = {require("../../../../public/img/logo_92.png")}/>
                </style.editInfoLogo>
                <style.editInfoInputBox>
                    <LabelInput label="이름" />
                    <SelectDate label="생년월일" />
                    <LabelRadio title="성별" label1='남자' label2='여자'/>
                    <LabelInput label="거주 지역" />
                    <LabelTextarea label="자기소개/경력" placeholder="자기소개 및 경력을 입력해주세요."/>
                </style.editInfoInputBox>
                <style.editInfoButtonBox>
                    <LabelButton label="수정 완료"/>
                </style.editInfoButtonBox>
            </style.editInfoContainer>
        </style.scrollViewContainer>
    );
}

export default EditInfoBS;