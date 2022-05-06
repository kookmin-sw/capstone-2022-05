import React, { FC, useState, useEffect } from 'react';
import { Image } from "react-native";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../RootStackParams';
import { Checkbox } from 'react-native-paper';
import CheckRadio from "../../components/CheckRadio"
import LabelInput from "../../components/LabelInput"
import LabelButton from "../../components/LabelButton"
import * as style from "./style"
import LabelInfo from '../../components/LabelInfo';
import { getParentMainInfo, acceptBS, rejectBS } from "../../api/parents"

// type registerScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

const MainParent: FC = () => {
    // const navigation = useNavigation<registerScreenProp>();
    const [existBS, setExistBS] = useState(false)
    const [existInv, setExistInv] = useState(false)
    const [inv_data, setInvData] = useState([])
    const [inv_data_bs, setInvDataBS] = useState({
        name: "",
        age: "",
        gender: "",
    })

    useEffect(() => {
        // getParentMainInfo(1, setInvData)
    }, [])

    useEffect(() => {
        if(inv_data.length > 0) {
            setExistInv(true)
            setInvDataBS(inv_data[0].babySitter)
        }
    }, [inv_data])

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
                                <style.mainContentListContent>김영순</style.mainContentListContent>
                            </style.mainContentList>
                            <style.mainContentList>
                                <style.mainContentListLabel>성별</style.mainContentListLabel>
                                <style.mainContentListContent>여성</style.mainContentListContent>
                            </style.mainContentList>
                            <style.mainContentList>
                                <style.mainContentListLabel>나이</style.mainContentListLabel>
                                <style.mainContentListContent>53</style.mainContentListContent>
                            </style.mainContentList>
                        </style.mainBSProfileContent>
                    </style.mainBSProfile> :
                    <style.mainBSInvitation>
                        <style.mainBSInvitationId>
                            <style.mainBSInvitationIdLabel>나의 초대 코드</style.mainBSInvitationIdLabel>
                            <style.mainBSInvitationIdCode>test1234</style.mainBSInvitationIdCode>
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
                                                <style.mainContentListContent>{inv_data_bs.name}</style.mainContentListContent>
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
                                        <LabelButton label="수락하기" function={acceptBS(1)}/>
                                    </style.mainBSInvitationCheckBtn>
                                    <style.mainBSInvitationCheckBtn>
                                        <LabelButton label="거절하기" color="#C4C4C4" function={rejectBS(1)}/>
                                    </style.mainBSInvitationCheckBtn>
                                </style.mainBSInvitationCheck> :
                                <></>
                        }
                    </style.mainBSInvitation>
                }
                <style.mainBtnContainer>
                    <style.mainBtnList>
                        <LabelButton label="아이 기록 캘린더" navigate='Calendar' />
                    </style.mainBtnList>
                    {/* <style.mainBtnList>
                        <LabelButton label="우리 아이 패턴" navigate='Calendar' />
                    </style.mainBtnList> */}
                    <style.mainBtnList>
                        <LabelButton label="오늘의 특이사항" navigate='BabyDiary' />
                    </style.mainBtnList>
                    <style.mainBtnList>
                        <LabelButton label="우리 아이 정보" navigate='DisplayInfoParent' />
                    </style.mainBtnList>
                </style.mainBtnContainer>
            </style.mainContainer>
        </style.scrollViewContainer>
    );
}

export default MainParent;