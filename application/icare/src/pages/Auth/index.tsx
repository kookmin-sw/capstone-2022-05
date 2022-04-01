import React, { FC } from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, Text } from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../RootStackParams';
import CheckRadio from "../../components/CheckRadio"
import LabelInput from "../../components/LabelInput"
import LabelButton from "../../components/LabelButton"

type authScreenProp = StackNavigationProp<RootStackParamList, 'Auth'>;

const AuthScreen: FC = () => {
    const navigation = useNavigation<authScreenProp>();

    return (
        <ScrollView style={styles.scrollViewContainer}>
            <View style={styles.container}>
                <View style={styles.authLogo}>
                    <Image source = {require("../../../public/img/logo_128.png")}/>
                </View>
                <View style={styles.authContent}>
                    <View style={styles.authRadio}>
                        <CheckRadio />
                    </View>
                    <View style={styles.authLabelinput}>
                        <LabelInput label="이메일"/>
                        <LabelInput label="비밀번호"/>
                    </View>
                    <View style={styles.authLabelButton}>
                        <LabelButton label="로그인"/>
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
        flexGrow: 1
    },
    container: {
      flex: 1,
    //   justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
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
    }
});