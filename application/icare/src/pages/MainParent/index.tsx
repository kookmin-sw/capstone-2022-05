import React, { FC, useState } from 'react';
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

// type registerScreenProp = StackNavigationProp<RootStackParamList, 'Register'>;

const MainParent: FC = () => {
    // const navigation = useNavigation<registerScreenProp>();
    const [existBS, setExistBS] = useState(false)
    const [existInv, setExistInv] = useState(true)

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
                                    </style.mainBSProfile>
                                    {/* <style.mainBSInvitationCheckLabel>김영순 님이 맞으신가요?</style.mainBSInvitationCheckLabel> */}
                                    <style.mainBSInvitationCheckBtn>
                                        <LabelButton label="수락하기" />
                                    </style.mainBSInvitationCheckBtn>
                                    <style.mainBSInvitationCheckBtn>
                                        <LabelButton label="거절하기" color="#C4C4C4"/>
                                    </style.mainBSInvitationCheckBtn>
                                </style.mainBSInvitationCheck> :
                                <></>
                        }
                    </style.mainBSInvitation>
                }
                <style.mainBtnContainer>
                    <style.mainBtnList>
                        <LabelButton label="아이 기록 캘린더" />
                    </style.mainBtnList>
                    <style.mainBtnList>
                        <LabelButton label="우리 아이 패턴" />
                    </style.mainBtnList>
                    <style.mainBtnList>
                        <LabelButton label="오늘의 특이사항" />
                    </style.mainBtnList>
                    <style.mainBtnList>
                        <LabelButton label="아이 정보 수정하기" />
                    </style.mainBtnList>
                </style.mainBtnContainer>
            </style.mainContainer>
        </style.scrollViewContainer>
    );
}

export default MainParent;