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
import {postBabysitterInfo} from '../../../api/babysitter'
// type registerScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

const SetInfoBS: FC = () => {
    const [info, setInfo] = useState({age:'',gender:'', region:'', career:''});
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [region, setRegion] = useState('');
    const [career, setCareer] = useState('');
    const infoArrange = () =>{
        setInfo({age:age, gender:gender,region:region, career:career})
    }
    useEffect(() => {
        infoArrange()
    },[age, gender,region, career])
    const PostBabySitter = () => {
        postBabysitterInfo(1, info)
    }
    // const navigation = useNavigation<registerScreenProp>();
    return (
        <style.scrollViewContainer>
            <style.setInfoContainer>
                <style.setInfoLogo>
                    <Image source = {require("../../../../public/img/logo_92.png")}/>
                </style.setInfoLogo>
                <style.setInfoInputBox>
                    <SelectDate label="생년월일" function={setAge} function_state={age}/>
                    <LabelRadio title="성별" label1='남자' label2='여자' function={setGender} function_state={gender}/>
                    <LabelInput label="거주 지역"  function={setRegion} function_state={region}/>
                    <LabelTextarea label="자기소개/경력" placeholder="자기소개 및 경력을 입력해주세요." function={setCareer} function_state={career}/>
                </style.setInfoInputBox>
                <style.setInfoButtonBox>
                    <LabelButton label="입력 완료" navigate='BSMain' function={PostBabySitter()}/>
                </style.setInfoButtonBox>
            </style.setInfoContainer>
        </style.scrollViewContainer>
    );
}

export default SetInfoBS;