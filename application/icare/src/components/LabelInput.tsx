import React, { FC, useState, useEffect } from "react";
import { View, TextInput } from "react-native";
import styled from 'styled-components/native';

interface LabelProps {
    label: string,
    function_state?: string,
    function?: void,
}

const LabelArea = styled.View`
    margin: 16px 0 12px 0;
`;

const LabelAreaText = styled.Text`
    font-size: 16px;
`;

const TextInputArea = styled.View`
    background-color: #F7F7F8;
    padding: 16px;
    border-radius: 10px;
    box-shadow: 0 2px rgba(0, 0, 0, .1);
`;

const LabelInput: FC<LabelProps> = (props) => {
    return (
        <View>
            <LabelArea>
                <LabelAreaText>{props.label}</LabelAreaText>
            </LabelArea>
            <TextInputArea>
                <TextInput
                    value={props.function_state}
                    onChangeText={(text) => {props.function ? props.function(text) : null}}
                />
            </TextInputArea>
        </View>
    );
};
export default LabelInput;