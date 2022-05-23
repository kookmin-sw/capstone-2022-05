import React, {FC, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";
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

type registerScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

const EditInfoBS: FC = (props) => {
    const navigation = useNavigation<registerScreenProp>();
    console.log(props)
    const [info, setInfo] = useState(props.route.params.info);
    const [edit, setEdit] = useState({})
    const [name, setName] = useState(props.route.params.info.bs.user.userName)
    // const [age, setAge] = useState(props.route.params.info.bs.age)
    const [age, setAge] = useState(60)
    const [gender, setGender] = useState(props.route.params.info.bs.gender)
    const [region, setRegion] = useState(props.route.params.info.bs.region)
    const [career, setCareer] = useState(props.route.params.info.bs.career)
    //edit info change
    useEffect(() => {
        setEdit({age:age, gender:gender, region:region, career:career})
    },[name, age, gender, region, career])
    //post edit info
    const completeEdit = () => {
        patchBabysitterInfo(props.route.params.bsId, edit);
        navigation.navigate('BSMain');
    }
    return (
        <style.scrollViewContainer>
            <style.editInfoContainer>
                <style.editInfoLogo>
                    <Image source = {require("../../../../public/img/logo_92.png")}/>
                </style.editInfoLogo>
                <style.editInfoInputBox>
                    <LabelInput label="이름" function={setName} function_state={name}/>
                    <SelectDate label="생년월일" function_state={age} function={setAge}/>
                    <LabelRadio title="성별" label1='남자' label2='여자' function={setGender} function_state={gender}/>
                    <LabelInput label="거주 지역" function={setRegion} function_state={region}/>
                    <LabelTextarea label="자기소개/경력" placeholder="자기소개 및 경력을 입력해주세요." function={setCareer} function_state={career}/>
                </style.editInfoInputBox>
                <style.editInfoButtonBox>
                    <TouchableOpacity style={styles.Loginbutton} onPress={completeEdit}>
                        <Text style={styles.LabelBtnText}>수정완료</Text>
                    </TouchableOpacity>
                </style.editInfoButtonBox>
            </style.editInfoContainer>
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
export default EditInfoBS;