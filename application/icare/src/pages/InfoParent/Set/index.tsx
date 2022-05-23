import React, { FC, useState, useEffect } from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import LabelInput from "../../../components/LabelInput"
import SelectDate from "../../../components/SelectDate"
import LabelRadio from "../../../components/LabelRadio"
import LabelButton from "../../../components/LabelButton"
import LabelTextarea from "../../../components/LabelTextarea"
import * as style from "./style"
import { setParentInfo } from "../../../api/parents"
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../../RootStackParams";
import {_getData} from "../../../api/users";
type registerScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

const SetInfoParent: FC = () => {
    const navigation = useNavigation<registerScreenProp>();
    const [Id,setID] = useState(0);
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

    useEffect(() => {
        _getData('userId', setID);
    });
    const PostParentInfo = () => {
        setParentInfo(dataForm, Id)
        navigation.navigate('Auth')
    }
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
                    <TouchableOpacity style={styles.Loginbutton} onPress={PostParentInfo}>
                        <Text style={styles.LabelBtnText}>입력완료</Text>
                    </TouchableOpacity>
                </style.setInfoButtonBox>
            </style.setInfoContainer>
            <View style={{height:60}}/>
        </style.scrollViewContainer>
    );
}

const styles = StyleSheet.create({
    Loginbutton : {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#AEC4BA",
        padding: 16,
        borderRadius: 10,
        boxShadow: "0 2px rgba(0, 0, 0, .1)",
    },
    LabelBtnText : {
        justifyContent: "center",
        alignItems: "center",
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },
});
export default SetInfoParent;