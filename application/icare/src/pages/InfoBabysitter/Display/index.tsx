import React, {FC, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../RootStackParams';
import LabelInfo from "../../../components/LabelInfo"
import LabelButton from "../../../components/LabelButton"
import * as style from "./style"
import {getBabysitterInfo} from '../../../api/babysitter'
import {_getData} from "../../../api/users";
type registerScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

const DisplayInfoBS: FC = () => {
    const navigation = useNavigation<registerScreenProp>();
    const [id, setID] = useState('');
    useEffect(() => {
        _getData('jobId', setID);
    });
    const [info, setInfo] = useState({bs:{age:'', gender:'', region:'', career:'', user:{username:''}}});
    useEffect(() => {
        getBabysitterInfo(id, setInfo)
    }, [id])
    console.log(info)
    return (
        <style.scrollViewContainer>
            <style.displayInfoContainer>
                <style.displayInfoLogo>
                    <Image source = {require("../../../../public/img/logo_92.png")}/>
                </style.displayInfoLogo>
                <style.displayInfoInputBox>
                    <LabelInfo label="이름" content={info.bs.user.username}/>
                    <LabelInfo label="나이" content={info.bs.age}/>
                    <LabelInfo label="성별" content={info.bs.gender === 'female' ? '여자' : '남자'}/>
                    <LabelInfo label="거주 지역" content={info.bs.region}/>
                    <LabelInfo label="자기소개/경력" content={info.bs.career}/>
                </style.displayInfoInputBox>
                <style.displayInfoButtonBox>
                    <TouchableOpacity style={styles.Loginbutton} onPress={()=>{navigation.navigate('EditInfoBS', {bsId: id, info:info})}}>
                        <Text style={styles.LabelBtnText}>수정하기</Text>
                    </TouchableOpacity>
                    {/*<LabelButton label="수정 하기"/>*/}
                </style.displayInfoButtonBox>
            </style.displayInfoContainer>
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
export default DisplayInfoBS;