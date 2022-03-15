import React, { FC } from "react";
import { View, TextInput } from "react-native";
import styled from 'styled-components/native';

interface LabelProps {
    label: string
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
    const [text, setText] = React.useState("");
    return (
        <View>
            <LabelArea>
                <LabelAreaText>{props.label}</LabelAreaText>
            </LabelArea>
            <TextInputArea>
                <TextInput
                    value={text}
                    onChangeText={text => setText(text)}
                />
            </TextInputArea>
        </View>
    );
};
export default LabelInput;