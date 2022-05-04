import React, { FC, useState, useEffect } from 'react';
import { Image } from "react-native";
import LabelInput from "../../../components/LabelInput"
import SelectDate from "../../../components/SelectDate"
import LabelRadio from "../../../components/LabelRadio"
import LabelButton from "../../../components/LabelButton"
import LabelTextarea from "../../../components/LabelTextarea"
import * as style from "./style"
import { setParentInfo } from "../../../api/parents"

const SetInfoParent: FC = () => {
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
        setDataForm({
            babyName,
            babyBirth,
            babyGender,
            region,
            career
        })
    },[babyName, babyBirth, babyGender, region, career])

    return (
        <style.scrollViewContainer>
            <style.setInfoContainer>
                <style.setInfoLogo>
                    <Image source = {require("../../../../public/img/logo_92.png")}/>
                </style.setInfoLogo>
                <style.setInfoInputBox>
                    <LabelInput label="아기 이름" function_state={babyName} function={setBabyName}/>
                    <SelectDate label="아기 출생일" function={setBabyBirth} />
                    <LabelRadio title="아기 성별" label1='남자' label2='여자' function={setBabyGender}/>
                    <LabelInput label="거주 지역" function_state={region} function = {setRegion}/>
                    <LabelTextarea label="아기 특이사항" placeholder="아이에 대한 주의사항을 적어주세요:)" function={setCareer}/>
                </style.setInfoInputBox>
                <style.setInfoButtonBox>
                    <LabelButton label="입력 완료" navigate='MainParent'/>
                </style.setInfoButtonBox>
            </style.setInfoContainer>
        </style.scrollViewContainer>
    );
}

export default SetInfoParent;