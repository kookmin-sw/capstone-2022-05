import React, { FC, useState, useEffect } from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, Text } from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../RootStackParams';
import CheckRadio from "../../components/CheckRadio"
import LabelInput from "../../components/LabelInput"
import LabelButton from "../../components/LabelButton"
import { login } from "../../api/users"
import * as style from "../BabyIndi/styles";
import styled from "styled-components/native";

type authScreenProp = StackNavigationProp<RootStackParamList, 'Auth'>;

const AuthScreen: FC = () => {
    const navigation = useNavigation<authScreenProp>();
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('');
    const [password, setPassword] = useState('')
    const [dataForm, setDataForm] = useState({
        "email" : "",
        "password" : ""
    })
    const [job, setJob] = useState('');
    useEffect(() => {
        setDataForm({
            "email" : email,
            "password" : password
        })
        // console.log(dataForm)
    },[email, password])
    const LoginEvent = () => {
        login(dataForm, job, setStatus);
    }
    useEffect(() => {
        if (status==200) {
            let route = job == 1 ? 'MainParent' : 'BSMain';
            navigation.navigate(route);
        }
    },[status])
    return (
        <ScrollView style={styles.scrollViewContainer}>
            <View style={styles.container}>
                <View style={styles.authLogo}>
                    <Image source = {require("../../../public/img/logo_128.png")}/>
                </View>
                <View style={styles.authContent}>
                    <View style={styles.authRadio}>
                        <CheckRadio function_state={job} function={setJob}/>
                    </View>
                    <View style={styles.authLabelinput}>
                        <LabelInput label="이메일" function_state={email} function={setEmail}/>
                        <LabelInput label="비밀번호" function_state={password} function={setPassword}/>
                    </View>
                    <View style={styles.authLabelButton}>
                        <TouchableOpacity style={styles.Loginbutton} onPress={LoginEvent}>
                            <Text style={styles.LabelBtnText}>로그인</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.authRegisterLabel}>
                        <Text>계정이 없으신가요?</Text>
                        <Text style={styles.authRegisterText} onPress={() => navigation.navigate('Register')}>회원가입</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default AuthScreen;


const styles = StyleSheet.create({
    scrollViewContainer: {
        height: "100%",
        backgroundColor: "#FFFFFF",
        flexGrow: 1,
        paddingTop:60,
    },
    container: {
      flex: 1,
    //   justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFFFFF"
    },
    authLogo: {
        marginTop: 40,
    },
    authContent : {
        width: "80%",
    },
    authRadio : {
        marginTop: 24
    },
    authLabelinput: {
        marginTop: 6,
        marginBottom: 12,
    },
    authLabelButton: {
        marginTop: 48,
        marginBottom: 12,
    },
    authRegisterLabel: {
        marginTop: 24,
        marginBottom: 40,
        flexDirection: 'row',
        justifyContent: "center",
    },
    authRegisterText: {
        color: "#AEC4BA",
        marginLeft: 6,
        fontWeight: "bold",
        fontSize: 16
    },
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