import React, { FC, useState, useEffect } from 'react';
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
import { getParentInfo, editParentInfo } from "../../../api/parents"

// type registerScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

const EditInfoParent: FC = () => {
    // const navigation = useNavigation<registerScreenProp>();
    const [data, setData] = useState({
        babyBirth: "",
        babyGender: "",
        babyName: "",
        career: "",
        region: ""
    })
    const [babyName, setBabyName] = useState('')
    const [babyBirth, setBabyBirth] = useState('')
    const [babyGender, setBabyGender] = useState('')
    const [region, setRegion] = useState('')
    const [career, setCareer] = useState('')
    const [dataForm, setDataForm] = useState({
        babyName: "",
        babyBirth: "",
        babyGender: "",
        region: "",
        career: ""
    })

    useEffect(() => {
        // getParentInfo(1, setData)
    }, [])

    useEffect(() => {
        setBabyName(data.babyName)
        setBabyBirth(data.babyBirth)
        setBabyGender(data.babyGender)
        setRegion(data.region)
        setCareer(data.career)
    }, [data])

    useEffect(() => {
        setDataForm({
            babyName,
            babyBirth,
            babyGender,
            region,
            career
        })
        console.log(dataForm, 'ss')
    },[babyName, babyBirth, babyGender, region, career])

    return (
        <style.scrollViewContainer>
            <style.editInfoContainer>
                <style.editInfoLogo>
                    <Image source = {require("../../../../public/img/logo_92.png")}/>
                </style.editInfoLogo>
                <style.editInfoInputBox>
                    <LabelInput label="아기 이름" function_state={babyName} function={setBabyName}/>
                    <SelectDate label="아기 출생일" function_state={data.babyBirth} function={setBabyBirth}/>
                    <LabelRadio title="아기 성별" label1='남자' label2='여자' function_state={babyGender} function={setBabyGender}/>
                    <LabelInput label="거주 지역" function_state={region} function={setRegion}/>
                    <LabelTextarea label="아기 특이사항" placeholder="아이에 대한 주의사항을 입력해주세요 :)" function_state={career} function={setCareer}/>
                </style.editInfoInputBox>
                <style.editInfoButtonBox>
                    <LabelButton label="수정 완료" navigate='MainParent'/>
                </style.editInfoButtonBox>
            </style.editInfoContainer>
        </style.scrollViewContainer>
    );
}

export default EditInfoParent;