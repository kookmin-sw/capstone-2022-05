import React, { FC, useEffect, useState } from 'react';
import {Image, View} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../RootStackParams';
import LabelInfo from "../../../components/LabelInfo"
import LabelButton from "../../../components/LabelButton"
import * as style from "./style"
import { getParentInfo } from "../../../api/parents"
import {_getData} from "../../../api/users";

// type registerScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

const DisplayInfoParent: FC = () => {
    // const navigation = useNavigation<registerScreenProp>();
    const [Id, setID] = useState(0);
    const [data, setData] = useState({
        babyBirth: "",
        babyGender: "",
        babyName: "",
        career: "",
        region: ""
    })
    const [birth, setBirth] = useState("")

    useEffect(() => {
        _getData('jobId', setID);
    });

    useEffect(() => {
        getParentInfo(Id, setData)
    }, [Id])
    
    useEffect(() => {
        var today = new Date(data.babyBirth)
        const year = today.getFullYear()
        const month = today.getMonth() + 1
        const date = today.getDate()
        setBirth(`${year}-${month >= 10 ? month : '0' + month}-${date >= 10 ? date : '0' + date}`)
    }, [data])

    return (
        <style.scrollViewContainer>
            <style.displayInfoContainer>
                <style.displayInfoLogo>
                    <Image source = {require("../../../../public/img/logo_92.png")}/>
                </style.displayInfoLogo>
                <style.displayInfoInputBox>
                    <LabelInfo label="아기 이름" content={data.babyName}/>
                    <LabelInfo label="아기 출생일" content={birth}/>
                    <LabelInfo label="아기 성별" content={data.babyGender == "male" ? "남자" : "여자"}/>
                    <LabelInfo label="거주 지역" content={data.region}/>
                    <LabelInfo label="아기 특이사항" content={data.career}/>
                </style.displayInfoInputBox>
                <style.displayInfoButtonBox>
                    <LabelButton label="수정 하기" navigate='EditInfoParent'/>
                </style.displayInfoButtonBox>
            </style.displayInfoContainer>
            <View style={{height:60}}/>
        </style.scrollViewContainer>
    );
}

export default DisplayInfoParent;