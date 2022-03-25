import React, { FC, useState } from "react";
import { View } from "react-native";
import styled from 'styled-components/native';
import DatePicker from 'react-native-date-picker'

interface SelectDateProps {
    label: string
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