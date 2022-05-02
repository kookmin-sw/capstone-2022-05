import React, { FC, useEffect } from "react";
import { View } from "react-native";
import styled from 'styled-components/native';
import { RadioButton } from 'react-native-paper';

interface RadioAndroidProps {
    function_state?: number,
    function?: void,
}

const RadioBox = styled.TouchableOpacity`
    justify-content: center;
    flex-direction: row;
    border: 1px solid #AEC4BA;
    border-radius: 10px;
    padding: 4px;
    margin: 12px 0;
`;

const RadioOption = styled.TouchableOpacity`
    flex-direction: row;
`;

const RadioLabel = styled.View`
    justify-content: center;
    align-items: center;
`;

const RadioLabelText = styled.Text`
    font-size: 16px;
    margin: 0 24px 0 6px;
`;

const CheckRadio: FC<RadioAndroidProps> = (props) => {
    const [checked, setChecked] = React.useState('parents');

    useEffect(() => {
        if(props.function) {
            if(checked === 'label1') props.function(1)
            else props.function(2)
        }
    }, [checked])

    return (
        <RadioBox>
            <RadioOption 
                onPress={() => setChecked('parents')}>
                <RadioButton
                    value="parents"
                    status={ checked === 'parents' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('parents')}
                    color="#AEC4BA"
                />
                <RadioLabel>
                    <RadioLabelText>부모</RadioLabelText>
                </RadioLabel>
            </RadioOption>
            <RadioOption 
                onPress={() => setChecked('babysitter')}>
                <RadioButton
                    value="babysitter"
                    status={ checked === 'babysitter' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('babysitter')}
                    color="#AEC4BA"
                />
                <RadioLabel>
                    <RadioLabelText>베이비 시터</RadioLabelText>
                </RadioLabel>
            </RadioOption>
        </RadioBox>
    );
};
export default CheckRadio;