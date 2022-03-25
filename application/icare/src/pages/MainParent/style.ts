import styled from 'styled-components/native';

export const scrollViewContainer = styled.ScrollView`
    height: 100%;
    background-color: #FFFFFF;
    flex-grow: 1;
`;

export const mainContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const mainBSProfile = styled.View`
    margin: 40px 0;
    width: 80%;
    flex-direction: row;
    /* justify-content: space-between; */
    /* background-color: red; */
`;

export const mainBSProfileCamera = styled.View`
    background-color: #AEC4BA;
    border-radius: 100;
    width: 110px;
    height: 110px;
    align-items: center;
    justify-content: center;
`;

export const mainBSProfileContent = styled.View`
    justify-content: center;
    margin: 0 36px;
`;

export const mainContentList = styled.View`
    flex-direction: row;
    margin: 6px 0;
`;

export const mainContentListLabel = styled.Text`
    font-size: 20px;
    margin-right: 24px;
    font-weight: bold;
    color: #AEC4BA;
`;

export const mainContentListContent = styled.Text`
    font-size: 20px;
`;

export const mainBSInvitation = styled.View`
    margin: 40px 0;
    width: 80%;
`;

export const mainBSInvitationId = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const mainBSInvitationIdLabel = styled.Text`
    font-weight: bold;
    font-size: 18px;
    color: #AEC4BA;
`;

export const mainBSInvitationIdCode = styled.Text`
    font-size: 18px;
`;

export const mainBSInvitationCheck = styled.View`
    margin-top: 24px;
    border: 1px solid #AEC4BA;
    border-radius: 12px;
    padding: 0 12px 6px 12px;
`;

export const mainBSInvitationCheckLabel = styled.Text`
    font-size: 18px;
    text-align: center;
`;

export const mainBSInvitationCheckBtn = styled.View`
    margin: 12px 0;
`;


export const mainBtnContainer = styled.View`
    width: 80%;
`;

export const mainBtnList = styled.View`
    margin: 12px 0;
`;