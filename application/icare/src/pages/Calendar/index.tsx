import React, { FC } from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../RootStackParams';
import {Calendar, CalendarProps} from 'react-native-calendars';
import * as style from "./style"

// type registerScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

const CalendarScreen: FC = () => {
    // const navigation = useNavigation<registerScreenProp>();

    return (
        <style.scrollViewContainer>
            <Calendar
                monthFormat={'yyyy MM'}
            />
        </style.scrollViewContainer>
    );
}

export default CalendarScreen;