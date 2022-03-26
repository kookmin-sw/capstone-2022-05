import React, { FC, useState } from "react";
import { View } from "react-native";
import styled from 'styled-components/native';

interface LabelTextareaProps {
    label: string,
    main_color: string,
    second_color: string,
}

const LabelArea = styled.View<{second_color: string}>`
    padding: 6px 12px;
    border-radius: 12px;
    background-color: ${props => props.second_color || "red"};
    flex-direction: row;
    min-width: 80px;
`;

const LabelAreaColor = styled.View<{main_color: string}>`
    width: 16px;
    height: 16px;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.main_color || "red"};
`;

const LabelAreaText = styled.Text`
    font-size: 16px;
    margin-left: 12px;
`;


const BehaviorLabel: FC<LabelTextareaProps> = (props) => {
    return (
        <View>
            <LabelArea second_color={props.second_color}>
                <LabelAreaColor main_color={props.main_color}></LabelAreaColor>
                <LabelAreaText>{props.label}</LabelAreaText>
            </LabelArea>
        </View>
    );
};
export default BehaviorLabel;