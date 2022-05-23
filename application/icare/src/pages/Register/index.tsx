import React, { FC, useState, useEffect } from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../RootStackParams';
import { Checkbox } from 'react-native-paper';
import CheckRadio from "../../components/CheckRadio"
import LabelInput from "../../components/LabelInput"
import LabelButton from "../../components/LabelButton"
import * as style from "./style"
import { signup } from "../../api/users"

type registerScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

const RegisterScreen: FC = () => {
    const navigation = useNavigation<registerScreenProp>();
    const [checked, setChecked] = useState(false);
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [nickname, setNickname] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')
    const [code, setCode] = useState(1)
    const [status, setStatus] = useState(201);
    const [dataForm, setDataForm] = useState({
        "email" : "",
        "password" : "",
        "username" : "",
        "nickname" : "",
        "code" : 1
    })

    useEffect(() => {
        setDataForm({
            "email" : email,
            "password" : password,
            "username" : username,
            "nickname" : nickname,
            "code" : code
        })
        // console.log(dataForm)
    },[username, email, nickname, code, password])
    const signUpEvent = () => {
        if (password == passwordCheck){
            signup(dataForm,setStatus)
            if (status === 201){
                navigation.navigate(code===1 ? 'SetInfoParent' : 'SetInfoBS');
            }
        }
    }
    return (
        <style.scrollViewContainer>
            <style.registerContainer>
                <style.registerLogo>
                    <Image source = {require("../../../public/img/logo_92.png")}/>
                </style.registerLogo>
                <style.registerTitle>회원가입</style.registerTitle>
                <style.registerInputBox>
                    <CheckRadio function={setCode}/>
                    <LabelInput label="이름" function_state={username} function={setUsername}/>
                    <LabelInput label="이메일" function_state={email} function={setEmail} />
                    <LabelInput label="닉네임" function_state={nickname} function={setNickname} />
                    <LabelInput label="비밀번호" function_state={password} function={setPassword} />
                    <LabelInput label="비밀번호 확인" function_state={passwordCheck} function={setPasswordCheck} />
                    {
                        password != passwordCheck ?
                        <Text style={{"marginTop" : 12, "color" : "red"}}>비밀번호가 일치하지 않습니다.</Text> : null
                    }
                </style.registerInputBox>
                <style.registerButtonBox>
                    <style.registerAgreeCheck>
                        <Checkbox.Android
                            status={checked ? 'checked' : 'unchecked'}
                            uncheckedColor="#000000"
                            color='#AEC4BA'
                            onPress={() => {
                                setChecked(!checked);
                            }}/>
                        <style.registerAgreeCheckText>개인정보 수집 및 이용 동의</style.registerAgreeCheckText>
                    </style.registerAgreeCheck>
                    <TouchableOpacity style={styles.Loginbutton} onPress={signUpEvent}>
                        <Text style={styles.LabelBtnText}>회원가입</Text>
                    </TouchableOpacity>
                    {/*<LabelButton label="회원가입" function={password != passwordCheck ? null : signup(dataForm)} />*/}
                    <style.registerLoginLabel>
                        <style.registerLoginLabelText>이미 계정이 있으신가요?</style.registerLoginLabelText>
                        <style.registerLoginLabelTextLink onPress={() => navigation.navigate('Auth')}>로그인</style.registerLoginLabelTextLink>
                    </style.registerLoginLabel>
                </style.registerButtonBox>
            </style.registerContainer>
        </style.scrollViewContainer>
    );
}

const styles = StyleSheet.create({
    Loginbutton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#AEC4BA",
        padding: 16,
        borderRadius: 10,
        boxShadow: "0 2px rgba(0, 0, 0, .1)",
    },
    LabelBtnText: {
        justifyContent: "center",
        alignItems: "center",
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    }
});
export default RegisterScreen;