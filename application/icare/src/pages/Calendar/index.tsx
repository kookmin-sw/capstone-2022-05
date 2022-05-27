import React, { FC, useState, useEffect } from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../RootStackParams';
import {Calendar, CalendarProps} from 'react-native-calendars';
import * as style from "./style"

type calendarScreenProp = StackNavigationProp<RootStackParamList, 'Calendar'>;

const CalendarScreen: FC = (props) => {
    const navigation = useNavigation<calendarScreenProp>();

    return (
        <style.scrollViewContainer>
            <Calendar
                monthFormat={'yyyy MM'}
                onDayPress={(day) => navigation.navigate({
                    name: 'BabyDiary',
                    params: {day, id:props.route.params.id}
                })}
            />
        </style.scrollViewContainer>
    );
}

export default CalendarScreen;