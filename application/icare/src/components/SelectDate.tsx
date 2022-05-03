import React, { FC, useEffect, useState } from "react";
import { View } from "react-native";
import styled from 'styled-components/native';
import DatePicker from 'react-native-date-picker'

interface SelectDateProps {
    label: string,
    function_state? : string,
    function?: void
}

const LabelArea = styled.View`
    margin: 16px 0 12px 0;
`;

const LabelAreaText = styled.Text`
    font-size: 16px;
`;

const SelectboxArea = styled.View`
`;

const SelectDate: FC<SelectDateProps> = (props) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        if(props.function) {
            props.function(date)
        }
    }, [date])

    useEffect(() => {
        if(props.function_state) {
            setDate(new Date(props.function_state))
        }
    }, [props.function_state])

    return (
        <View>
            <LabelArea>
                <LabelAreaText>{props.label}</LabelAreaText>
            </LabelArea>
            <SelectboxArea>
                <DatePicker
                    date={date} 
                    onDateChange={setDate} 
                    mode="date"
                    locale="ko"
                />
            </SelectboxArea>
        </View>
    );
};
export default SelectDate;