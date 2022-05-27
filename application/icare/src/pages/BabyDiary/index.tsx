import React, { FC, useEffect, useState } from 'react';
import {Image, View} from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../RootStackParams';
import BehaviorLabel from "../../components/BehaviorLabel"
import BehaviorTimeline from "../../components/BehaviorTimeline"
import * as style from "./style"
import {getCalendarDiary} from "../../api/parents"

// type registerScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

const BabyDiary: FC = (props) => {
    // const navigation = useNavigation<registerScreenProp>();
    const [checked, setChecked] = useState(false);
    const [date, setDate] = useState('');
    const [issue, setIssue] = useState({
        CalendarDiary: {
            issue: ""
        },
        CalendarImageList : [],
        CalendarAlarmList : []
    });

    const alarmType = [
        {
            alarmMainColor : '#F59E0B',
            alarmSecondColor : '#FFFBEB'
        },
        {
            alarmMainColor : '#AEC4BA',
            alarmSecondColor : '#DDE9E7'
        },
        {
            alarmMainColor : '#DC2626',
            alarmSecondColor : '#FEF2F2'
        },
        {
            alarmMainColor : '#4A4A4A',
            alarmSecondColor : '#F6F6F6'
        }
    ]

    useEffect(() => {
        if(props.route.params.day.dateString)
            setDate(props.route.params.day.dateString)
        else {
            var today = new Date()
            const year = today.getFullYear()
            const month = today.getMonth() + 1
            const date = today.getDate()
            setDate(`${year}-${month >= 10 ? month : '0' + month}-${date >= 10 ? date : '0' + date}`)
        }
    }, [props])

    useEffect(() => {
        var mapping_id = props.route.params.id
        if(mapping_id) {
            getCalendarDiary(mapping_id, {"date": date}, setIssue)
        }
    }, [date, props])

    return (
        <style.scrollViewContainer>
            <style.DiaryContainer>
                <style.BabyBehaviorContainer>
                    <style.BabyBehaviorContainerTitle>[{date}] 아기 행동패턴</style.BabyBehaviorContainerTitle>
                    <style.BabyBehaviorContainerLabels>
                        <BehaviorLabel label="밥" main_color='#F59E0B' second_color='#FFFBEB'/>
                        <BehaviorLabel label="수면" main_color='#AEC4BA' second_color='#DDE9E7'/>
                        <BehaviorLabel label="용변" main_color='#DC2626' second_color='#FEF2F2'/>
                        <BehaviorLabel label="목욕" main_color='#4A4A4A' second_color='#F6F6F6'/>
                    </style.BabyBehaviorContainerLabels>
                    <style.BabyBehaviorContainerTimeline>
                        {
                            issue ?
                            issue.CalendarAlarmList.map((e, i) => {
                                return (
                                    <BehaviorTimeline label={e.alarmText} main_color={alarmType[Number(e.alarmCode)-1].alarmMainColor} second_color={alarmType[Number(e.alarmCode)-1].alarmSecondColor} image_uri={e.alarmImg} time={e.createdAt}/>
                                )
                            }) : null

                        }
                    </style.BabyBehaviorContainerTimeline>
                </style.BabyBehaviorContainer>
                <style.BabyDiaryContainer>
                    <style.BabyBehaviorContainerTitle>오늘의 아기 일기</style.BabyBehaviorContainerTitle>
                    <style.BabyDiaryContent>
                        <style.BabyDiaryContentText>
                            {issue ? issue.CalendarDiary.issue : "오늘의 일기가 없어요."}
                        </style.BabyDiaryContentText>
                        {/* {
                            issue.CalendarImageList ? 
                            issue.CalendarImageList.map((e, i) => {
                                return (
                                    <Image 
                                        source={{uri : "https://icare-s3.s3.amazonaws.com/" + e.image}}
                                        style = {{width: 300, height: 300}}
                                    />
                                )
                            }) : null

                        } */}
                    </style.BabyDiaryContent>
                </style.BabyDiaryContainer>
            </style.DiaryContainer>
            <View style={{height:60}}/>
        </style.scrollViewContainer>
    );
}

export default BabyDiary;