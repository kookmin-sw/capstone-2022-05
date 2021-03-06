import React, {FC, useState, useEffect, useCallback} from 'react';
import {Alert, Image, View} from "react-native";
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../RootStackParams';
import { Checkbox } from 'react-native-paper';
import CheckRadio from "../../components/CheckRadio"
import LabelInput from "../../components/LabelInput"
import LabelButton from "../../components/LabelButton"
import * as style from "./style"
import LabelInfo from '../../components/LabelInfo';
import {getParentInfo, getParentMainInfo, acceptBS, rejectBS, getTodayDiary, getCalendarDiary} from "../../api/parents"
import {_getData} from "../../api/users";
import { getSensor, setSensorFalse } from "../../api/babysitter"

type parentScreenProp = StackNavigationProp<RootStackParamList, 'MainParent'>;

const MainParent: FC = () => {
    const navigation = useNavigation<parentScreenProp>();
    const [Id, setID] = useState(0);
    const [mainData, setMainData] = useState([])
    const [mappingList, setMappingList] = useState({})
    const [existBS, setExistBS] = useState(false)
    const [existInv, setExistInv] = useState(false)
    const [sensor, setSensor] = useState(false);
    const [babyState, setBabyState] = useState([]);
    const [date, setDate] = useState('');
    const [inv_data_bs, setInvDataBS] = useState({
        name: "",
        age: "",
        gender: "",
    })
    const BabyAlert = () => {
        let len = babyState.CalendarAlarmList.length;
        if (babyState.CalendarAlarmList[len-1]) {
            let lastIssue = babyState.CalendarAlarmList[len - 1];
            Alert.alert(
                "[알림] " + lastIssue.alarmText,
                "",
                [
                    {
                        text: "보러가기",
                        onPress: () => {
                            navigation.navigate('BabyDiary', {id: mainData.mapping_info[0].mappingId})
                        }
                    },
                    {text: "닫기"}
                ]
            )
        }
        else {
            Alert.alert(
                "아직 수신한 알림이 없습니다","",
                [{
                    text:"닫기",
                    style: "cancel",
                }]
            )
        }
    }
    const IotAlert = () => {
        sensor?
        Alert.alert(
            "아이의 기저귀를 확인해주세요",
            "아이가 용변을 보았나요?",
            [
                {
                    text: "아니요",
                    style: "cancel",
                    onPress : () => {setSensorFalse()}
                },
                {
                    text: "네",
                    onPress : () => {setSensorFalse()}
                }
            ]
        ):
            Alert.alert(
                "특별한 상태가 감지되지 않았습니다","",
                [{
                    text:"닫기",
                    style: "cancel",
                }]
            )
    }
    // setInterval(IotAlert, 60000)
    useEffect(() => {
        _getData('jobId', setID);
        var today = new Date()
        const year = today.getFullYear()
        const month = today.getMonth() + 1
        const date = today.getDate()
        setDate(`${year}-${month >= 10 ? month : '0' + month}-${date >= 10 ? date : '0' + date}`)
    });
    
    useEffect(() => {
        getParentMainInfo(Id, setMainData)
    }, [Id])

    useEffect(() => {
        if(mainData.message === '보모의 매핑 요청 리스트') {
            setExistInv(true)
            setInvDataBS(mainData.request_info[0].babySitter)
        } else if(mainData.message === '매핑 리스트') {
            setExistBS(true)
            setMappingList(mainData.mapping_info[0]);
        }
        getSensor(setSensor);
    }, [mainData])
    // setInterval(() => {getSensor(setSensor)}, 60000)
    useEffect(() => {
        // console.log(inv_data_bs, 'bs')
        // console.log(mainData)
    }, [mainData])
    return (
        <style.scrollViewContainer>
            <style.mainContainer>
                {
                    existBS ? 
                    <style.mainBSProfile>
                        <style.mainBSProfileCamera>
                            <Image source = {require("../../../public/img/camera.png")}/>
                        </style.mainBSProfileCamera>
                        <style.mainBSProfileContent>
                            <style.mainContentList>
                                <style.mainContentListLabel>이름</style.mainContentListLabel>
                                <style.mainContentListContent>{mappingList.babySitter.user.username}</style.mainContentListContent>
                            </style.mainContentList>
                            <style.mainContentList>
                                <style.mainContentListLabel>성별</style.mainContentListLabel>
                                <style.mainContentListContent>{mappingList.babySitter.gender == 'female' ? "여성" : "남성"}</style.mainContentListContent>
                            </style.mainContentList>
                            <style.mainContentList>
                                <style.mainContentListLabel>나이</style.mainContentListLabel>
                                <style.mainContentListContent>{mappingList.babySitter.age}</style.mainContentListContent>
                            </style.mainContentList>
                        </style.mainBSProfileContent>
                    </style.mainBSProfile> :
                    <style.mainBSInvitation>
                        <style.mainBSInvitationId>
                            <style.mainBSInvitationIdLabel>나의 초대 코드</style.mainBSInvitationIdLabel>
                            <style.mainBSInvitationIdCode>{mainData.inviteEmail}</style.mainBSInvitationIdCode>
                        </style.mainBSInvitationId>
                        {
                            existInv ?
                                <style.mainBSInvitationCheck>
                                    <style.mainBSProfile>
                                        <style.mainBSProfileCamera>
                                            <Image source = {require("../../../public/img/camera.png")}/>
                                        </style.mainBSProfileCamera>
                                        <style.mainBSProfileContent>
                                            <style.mainContentList>
                                                <style.mainContentListLabel>이름</style.mainContentListLabel>
                                                <style.mainContentListContent>{inv_data_bs.user.username}</style.mainContentListContent>
                                            </style.mainContentList>
                                            <style.mainContentList>
                                                <style.mainContentListLabel>성별</style.mainContentListLabel>
                                                <style.mainContentListContent>{inv_data_bs.gender == 'female' ? "여성" : "남성"}</style.mainContentListContent>
                                            </style.mainContentList>
                                            <style.mainContentList>
                                                <style.mainContentListLabel>나이</style.mainContentListLabel>
                                                <style.mainContentListContent>{inv_data_bs.age}</style.mainContentListContent>
                                            </style.mainContentList>
                                        </style.mainBSProfileContent>
                                    </style.mainBSProfile>
                                    {/* <style.mainBSInvitationCheckLabel>김영순 님이 맞으신가요?</style.mainBSInvitationCheckLabel> */}
                                    <style.mainBSInvitationCheckBtn>
                                        <LabelBtn color="#AEC4BA" onPress={() => {acceptBS(mainData.request_info[0].mappingId);navigation.navigate('MainParent')}}>
                                            <LabelBtnText>수락하기</LabelBtnText>
                                        </LabelBtn>
                                        {/* <LabelButton label="수락하기" function={acceptBS(1)}/> */}
                                    </style.mainBSInvitationCheckBtn>
                                    <style.mainBSInvitationCheckBtn>
                                        <LabelBtn color="#C4C4C4" onPress={() => {rejectBS(mainData.request_info[0].mappingId);navigation.navigate('MainParent')}}>
                                            <LabelBtnText>거절하기</LabelBtnText>
                                        </LabelBtn>
                                        {/* <LabelButton label="거절하기" color="#C4C4C4" function={rejectBS(1)}/> */}
                                    </style.mainBSInvitationCheckBtn>
                                </style.mainBSInvitationCheck> :
                                <></>
                        }
                    </style.mainBSInvitation>
                }
                <style.mainBtnContainer>
                    <style.mainBtnList>
                        <LabelBtn color="#AEC4BA" onPress={() => {navigation.navigate('Calendar', {id : mainData.mapping_info[0].mappingId})}}>
                            <LabelBtnText>아이 기록 캘린더</LabelBtnText>
                        </LabelBtn>
                    </style.mainBtnList>
                    <style.mainBtnList>
                        <LabelBtn color="#AEC4BA" onPress={() => {navigation.navigate('BabyDiary', {id : mainData.mapping_info[0].mappingId})}}>
                            <LabelBtnText>오늘의 특이사항</LabelBtnText>
                        </LabelBtn>
                    </style.mainBtnList>
                    <style.mainBtnList>
                        <LabelButton label="우리 아이 정보" navigate='DisplayInfoParent' />
                    </style.mainBtnList>
                    <style.mainBtnList>
                        <LabelBtn onPress={()=>{getCalendarDiary(mainData.mapping_info[0].mappingId, {"date": date}, setBabyState); BabyAlert();}} color="#AEC4BA">
                            <LabelBtnText>아이 상태 확인하기</LabelBtnText>
                        </LabelBtn>
                    </style.mainBtnList>
                    <style.mainBtnList>
                        <LabelBtn onPress={()=>{getSensor(setSensor); IotAlert();}} color="#AEC4BA">
                            <LabelBtnText>센서 확인하기</LabelBtnText>
                        </LabelBtn>
                    </style.mainBtnList>
                </style.mainBtnContainer>
            </style.mainContainer>
            <View style={{height:60}}/>
        </style.scrollViewContainer>
    );
}

export default MainParent;

const LabelBtn = styled.TouchableOpacity<{color: string}>`
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color || "#AEC4BA"};
    padding: 16px;
    border-radius: 10px;
    box-shadow: 0 2px rgba(0, 0, 0, .1);
`;

const LabelBtnText = styled.Text`
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
`;