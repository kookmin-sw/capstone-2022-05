import React, {FC, useEffect, useState} from 'react';
import { Image } from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../RootStackParams';
import LabelInfo from "../../../components/LabelInfo"
import LabelButton from "../../../components/LabelButton"
import * as style from "./style"
import {getBabysitterInfo} from '../../../api/babysitter'
// type registerScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

const DisplayInfoBS: FC = () => {
    // const navigation = useNavigation<registerScreenProp>();
    const [info, setInfo] = useState({age:'', gender:'', region:'', career:'', user:{userName:''}});
    useEffect(() => {
        getBabysitterInfo(1, setInfo)
    })
    return (
        <style.scrollViewContainer>
            <style.displayInfoContainer>
                <style.displayInfoLogo>
                    <Image source = {require("../../../../public/img/logo_92.png")}/>
                </style.displayInfoLogo>
                <style.displayInfoInputBox>
                    <LabelInfo label="이름" content={info.user.userName}/>
                    <LabelInfo label="나이" content={info.age}/>
                    <LabelInfo label="성별" content={info.gender}/>
                    <LabelInfo label="거주 지역" content={info.region}/>
                    <LabelInfo label="자기소개/경력" content={info.career}/>
                </style.displayInfoInputBox>
                <style.displayInfoButtonBox>
                    <LabelButton label="수정 하기"/>
                </style.displayInfoButtonBox>
            </style.displayInfoContainer>
        </style.scrollViewContainer>
    );
}

export default DisplayInfoBS;