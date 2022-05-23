import styled from 'styled-components/native';

export const scrollViewContainer = styled.ScrollView`
    height: 100%;
    background-color: #FFFFFF;
    flex-grow: 1;
    margin-top: 60px;
`;

export const displayInfoContainer = styled.View`
    flex: 1;
    align-items: center;
    background-color: #FFFFFF;
`;

export const displayInfoLogo = styled.View`
    margin-top: 40px;
`;

export const displayInfoTitle = styled.Text`
    margin-top: 24px;
    font-size: 24px;
    font-weight: bold;
`;

export const displayInfoInputBox = styled.View`
    margin: 24px 0;
    width: 80%;
`;

export const displayInfoButtonBox = styled.TouchableOpacity`
    margin: 24px 0;
    width: 80%;
`;
