import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  padding: 9% 0 18% 0;
  align-items: center;
  justify-content: space-between;
  background: #fff;
`;
export const LogoView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const lightText = styled.Text`
  font-size: 16px;
  font-weight: 200;
`;
export const Logo = styled.Image`
  height: 91px;
  width: 91px;
`;
export const PlusBaby = styled.TouchableOpacity`
  position: absolute;
  top: 36%;
  height: 68px;
  width: 68px;
`;
export const plusIcon = styled.Image`
  width: 100%;
  height: 100%;
`;
export const NextPage = styled.View`
  width: 80%;
  display: flex;
  flex-direction: column;
`;
export const BabyList = styled.View`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const babyElem = styled.TouchableOpacity`
  width: 30%;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const babyPhoto = styled.Image`
  border: 1px solid #AEC4BA;
  border-radius: 50px;
  margin-bottom: 8px;
`;