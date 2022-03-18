import React, { FC, useState } from "react";
import { View, TextInput } from "react-native";
import styled from 'styled-components/native';

interface LabelTextareaProps {
    label: string
}

const LabelArea = styled.View`
    margin: 16px 0 12px 0;
`;

const LabelAreaText = styled.Text`
    font-size: 16px;
`;

const TextArea = styled.TextInput`
    font-size: 16px;
    background-color: #F7F7F8;
    padding: 12px 16px;
    border-radius: 10px;
    box-shadow: 0 2px rgba(0, 0, 0, .1);
    height: 180px;
`;


const LabelTextarea: FC<LabelTextareaProps> = (props) => {
    const [text, setText] = useState()
    return (
        <View>
            <LabelArea>
                <LabelAreaText>{props.label}</LabelAreaText>
            </LabelArea>
            <TextArea
                multiline={true}
                numberOfLines={4}
                onChange={(e:any) => setText(e.target.value)}
                placeholder="아이에 대한 주의사항을 적어주세요:)"
                value={text}/>
        </View>
    );
};
export default LabelTextarea;