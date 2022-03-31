import React, { FC, useState } from "react";
import { View, Image } from "react-native";
import styled from 'styled-components/native';

interface BehaviorTimelineProps {
    label: string,
    main_color: string,
    second_color: string,
    is_image: boolean,
}

const TimeLine = styled.View<{second_color: string}>`
    background-color: ${props => props.second_color || "#AEC4BA"};
    border-radius: 12px;
    margin: 12px 0;
`;

const TimeLineTop = styled.View`
    flex-direction: row;
`;


const TimeLineTime = styled.View<{main_color: string, showContent: boolean}>`
    border-top-left-radius: 12px;
    border-bottom-left-radius: ${props => props.showContent ? 0 : "12px"};
    background-color: ${props => props.main_color || "#AEC4BA"};
    width: 20%;
    min-width: 80px;
    padding: 12px;
    justify-content: center;
    align-items: center;
`;

const TimeLineTimeText = styled.Text`
    font-weight: bold;
    font-size: 18px;
`;

const TimeLineContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
`;

const TimeLineContentText = styled.Text`
    margin-left: 12px;
    font-size: 16px;
`;

const TimeLineContentImg = styled.TouchableOpacity`
    margin-right: 24px;
`;

const TimeLineBox = styled.View<{second_color: string}>`
    background-color: ${props => props.second_color || "#AEC4BA"};
    padding: 12px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
`;

const TimeLineBoxImg = styled.Image`
    width: 100%;
    height: 300px;
`;


const BehaviorTimeline: FC<BehaviorTimelineProps> = (props) => {
    const [showContent, setShowContent] = useState(false)
    return (
        <View>
            <TimeLine second_color={props.second_color}>
                <TimeLineTop>
                    <TimeLineTime main_color={props.main_color} showContent={showContent}>
                        <TimeLineTimeText>07:55</TimeLineTimeText>
                    </TimeLineTime>
                    <TimeLineContent>
                        <TimeLineContentText>{props.label}</TimeLineContentText>
                        {
                            props.is_image ?
                            <TimeLineContentImg onPress={() => setShowContent(!showContent)}>
                                {
                                    showContent ?
                                    <Image source = {require("../../public/img/up.png")}/> :
                                    <Image source = {require("../../public/img/down.png")}/>
                                }
                            </TimeLineContentImg> :
                            <></>
                        }
                    </TimeLineContent>
                </TimeLineTop>
                {
                    showContent?
                    <TimeLineBox second_color={props.second_color}>
                        <TimeLineBoxImg source = {require("../../public/img/example_baby.jpeg")}/>
                    </TimeLineBox> :
                    <></>
                }
            </TimeLine>
        </View>
    );
};
export default BehaviorTimeline;