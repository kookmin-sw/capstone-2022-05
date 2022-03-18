import React, { FC } from 'react';
import { Image } from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../RootStackParams';
import { Checkbox } from 'react-native-paper';
import CheckRadio from "../../components/CheckRadio"
import LabelInput from "../../components/LabelInput"
import LabelButton from "../../components/LabelButton"
import * as style from "./style"

type registerScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

const RegisterScreen: FC = () => {
    const navigation = useNavigation<registerScreenProp>();
    const [checked, setChecked] = React.useState(false);

    return (
        <style.scrollViewContainer>
            <style.registerContainer>
                <style.registerLogo>
                    <Image source = {require("../../../public/img/logo_92.png")}/>
                </style.registerLogo>
                <style.registerTitle>회원가입</style.registerTitle>
                <style.registerInputBox>
                    <CheckRadio/>
                    <LabelInput label="이름" />
                    <LabelInput label="이메일" />
                    <LabelInput label="닉네임" />
                    <LabelInput label="비밀번호" />
                    <LabelInput label="비밀번호 확인" />
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
                    <LabelButton label="회원가입"/>
                    <style.registerLoginLabel>
                        <style.registerLoginLabelText>이미 계정이 있으신가요?</style.registerLoginLabelText>
                        <style.registerLoginLabelTextLink onPress={() => navigation.navigate('Auth')}>로그인</style.registerLoginLabelTextLink>
                    </style.registerLoginLabel>
                </style.registerButtonBox>
            </style.registerContainer>
        </style.scrollViewContainer>
    );
}

export default RegisterScreen;