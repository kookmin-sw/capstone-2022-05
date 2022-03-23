import styled from 'styled-components/native';

export const scrollViewContainer = styled.ScrollView`
    height: 100%;
    background-color: #FFFFFF;
    flex-grow: 1;
`;

export const DiaryContainer = styled.View`
    flex: 1;
    align-items: center;
    background-color: #FFFFFF;
`;

export const BabyBehaviorContainer = styled.View`
    width: 90%;
    margin-top: 20px;
`;

export const BabyBehaviorContainerTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 12px;
`;

export const BabyBehaviorContainerLabels = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 12px 0;
`;

export const BabyBehaviorContainerTimeline = styled.View`
    margin: 12px 0;
`;

export const BabyDiaryContainer = styled.View`
    width: 90%;
    margin-top: 20px;
`;

export const BabyDiaryContent = styled.View`
    border: 1px solid #AEC4BA;
    padding: 24px;
    border-radius: 12px;
`;

export const BabyDiaryContentText = styled.Text`
`;