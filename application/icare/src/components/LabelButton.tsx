import React, { FC } from "react";
import { View } from "react-native";
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackParams';

type ScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;

interface ButtonProps {
    label: string,
    color?: string,
    navigate?: string,
    function?: void,
}

const defaultProps: ButtonProps = {
    label: "Btn",
    color: "#AEC4BA",
    navigate: ""
}

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

const LabelButton: FC<ButtonProps> = (props) => {
    const navigation = useNavigation<ScreenProp>();
    return (
        <View>
            <LabelBtn color={props.color} onPress={() => {navigation.push(props.navigate); props.function}}>
                <LabelBtnText>{props.label}</LabelBtnText>
            </LabelBtn>
        </View>
    );
};

LabelButton.defaultProps = defaultProps;
export default LabelButton;