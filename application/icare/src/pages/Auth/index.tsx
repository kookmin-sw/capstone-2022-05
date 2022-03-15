import React, { FC } from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity } from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../RootStackParams';
import { RadioButton, Text } from 'react-native-paper';
import LabelInput from "../../components/LabelInput"
import LabelButton from "../../components/LabelButton"

type authScreenProp = StackNavigationProp<RootStackParamList, 'Auth'>;

const AuthScreen: FC = () => {
    const navigation = useNavigation<authScreenProp>();
    const [checked, setChecked] = React.useState('parents');

    return (
        <ScrollView style={styles.scrollViewContainer}>
            <View style={styles.container}>
                <View style={styles.authLogo}>
                    <Image source = {require("../../../public/img/logo_128.png")}/>
                </View>
                <View style={styles.authContent}>
                    <View style={styles.authRadio}>
                        <TouchableOpacity 
                            style={styles.authRadioOption}
                            onPress={() => setChecked('parents')}>
                            <RadioButton
                                value="parents"
                                status={ checked === 'parents' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('parents')}
                                color="#AEC4BA"
                            />
                            <View style={styles.authRadioLabel}>
                                <Text style={styles.authRadioLabelText}>부모</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.authRadioOption}
                            onPress={() => setChecked('babysitter')}>
                            <RadioButton
                                value="babysitter"
                                status={ checked === 'babysitter' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('babysitter')}
                                color="#AEC4BA"
                            />
                            <View style={styles.authRadioLabel}>
                                <Text style={styles.authRadioLabelText}>베이비 시터</Text>
                            </View>
                        </TouchableOpacity>
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
                        <Text style={styles.authRegisterText}>회원가입</Text>
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
        flexDirection: 'row',
        justifyContent: "center",
        marginTop: 36,
        marginBottom: 12,
        padding: 4,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#AEC4BA",
    },
    authRadioOption : {
        flexDirection: 'row',
    },
    authRadioLabel : {
        justifyContent: "center",
        alignItems: "center"
    },
    authRadioLabelText : {
        fontSize: 16,
        marginRight: 24,
        marginLeft: 6,
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