import styled from 'styled-components/native';

export const scrollViewContainer = styled.ScrollView`
    height: 100%;
    background-color: #FFFFFF;
    flex-grow: 1;
    padding-top: 60px;
`;

export const registerContainer = styled.View`
    flex: 1;
    align-items: center;
    background-color: #FFFFFF;
`;

export const registerLogo = styled.View`
    margin-top: 40px;
`;

export const registerTitle = styled.Text`
    margin-top: 24px;
    font-size: 24px;
    font-weight: bold;
`;

export const registerInputBox = styled.View`
    margin: 24px 0;
    width: 80%;
`;

export const registerButtonBox = styled.View`
    margin: 24px 0;
    width: 80%;
`;

export const registerAgreeCheck = styled.View`
    margin-bottom: 24px;
    flex-direction: row;
    align-items: center;
`;

export const registerAgreeCheckText = styled.Text`
    color: #030229;
    font-size: 16px;
`;

export const registerLoginLabel = styled.View`
    margin: 24px 0;
    flex-direction: row;
    justify-content: center;
`;

export const registerLoginLabelText = styled.Text`
    margin-right: 6px;
`;

export const registerLoginLabelTextLink = styled.Text`
    font-size: 16px;
    color: #AEC4BA;
    font-weight: bold;
`;