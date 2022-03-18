import React, { FC } from "react";
import { View, TextInput } from "react-native";
import styled from 'styled-components/native';

interface LabelProps {
    label: string,
    content: string,
}

const LabelInfoArea = styled.View`
    margin: 16px 0 12px 0;
    flex-direction: row;
`;

const LabelArea = styled.View`
    width: 35%;
`;

const LabelAreaText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #AEC4BA;
`;

const ContentArea = styled.View`
    width: 65%;
    margin-left: 12px;
`;

const ContentAreaText = styled.Text`
    font-size: 16px;
`;

const LabelInfo: FC<LabelProps> = (props) => {
    const [text, setText] = React.useState("");
    return (
        <LabelInfoArea>
            <LabelArea>
                <LabelAreaText>{props.label}</LabelAreaText>
            </LabelArea>
            <ContentArea>
                <ContentAreaText>{props.content}</ContentAreaText>
            </ContentArea>
        </LabelInfoArea>
    );
};
export default LabelInfo;