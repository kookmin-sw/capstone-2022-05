import React, { FC, useState, useEffect } from 'react';
import {Image, View} from "react-native";
import styled from 'styled-components/native';
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
import {_getData} from "../../../api/users";

type registerScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

const EditInfoParent: FC = () => {
    const navigation = useNavigation<registerScreenProp>();
    const [Id, setID] = useState(0);
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
        _getData('jobId', setID);
        console.log(Id);
    });

    useEffect(() => {
        getParentInfo(Id, setData)
    }, [Id])

    useEffect(() => {
        console.log(data)
    }, [data])

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
    },[babyName, babyBirth, babyGender, region, career])
    const Complete = () => {
        editParentInfo(dataForm, Id);
        navigation.navigate('MainParent');
    }
    return (
        <style.scrollViewContainer>
            <style.editInfoContainer>
                <style.editInfoLogo>
                    <Image source = {require("../../../../public/img/logo_92.png")}/>
                </style.editInfoLogo>
                <style.editInfoInputBox>
                    <LabelInput label="?????? ??????" function_state={babyName} function={setBabyName}/>
                    <SelectDate label="?????? ?????????" function_state={data.babyBirth} function={setBabyBirth}/>
                    <LabelRadio title="?????? ??????" label1='??????' label2='??????' function_state={babyGender} function={setBabyGender}/>
                    <LabelInput label="?????? ??????" function_state={region} function={setRegion}/>
                    <LabelTextarea label="?????? ????????????" placeholder="????????? ?????? ??????????????? ?????????????????? :)" function_state={career} function={setCareer}/>
                </style.editInfoInputBox>
                <style.editInfoButtonBox>
                    <LabelBtn color="#AEC4BA" onPress={Complete}>
                        <LabelBtnText>?????? ??????</LabelBtnText>
                    </LabelBtn>
                </style.editInfoButtonBox>
            </style.editInfoContainer>
            <View style={{height:60}}/>
        </style.scrollViewContainer>
    );
}

export default EditInfoParent;

const LabelBtn = styled.TouchableOpacity<{color: string}>`
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color || "#AEC4BA"};
    padding: 16px;
    border-radius: 10px;
    box-shadow: 0 2px rgba(0, 0, 0, .1);
`;

const LabelBtnText = styled.Text`
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
`;