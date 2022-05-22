import styled from 'styled-components/native';

export const NoticeView = styled.View`
  width: 80%;
  padding-top: 20px;
  margin: 0 auto;
`;
export const TextTemplate = styled.View`
  margin-bottom: 20px;
`;
export const Templates = styled.TouchableOpacity`
  width: 100%;
  padding: 8px 12px;
  border: 1px #ebebeb;
  border-radius: 10px;
  margin-bottom: 12px;
`;
export const PhotoAttach = styled.View`
  position: relative;
  width: 80%;
  margin: 0 auto;
`;
export const AttachBtn = styled.TouchableOpacity`
  position: absolute;
  top: -4px;
  right: 4px;
`;
export const AttachText = styled.Text`
  font-size: 26px;
  width: 32px;
  height: 32px;
  text-align: center;
`;
export const PhotoView = styled.View`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;
export const Photos = styled.Image`
  background: #ebebeb;
  width: 30%;
  margin-right: 3%;
  height: 100px;
  margin-bottom: 20px;
`;
export const ButtonView = styled.TouchableOpacity`
  width: 80%;
  margin: 20px auto 0 auto;
  justify-content: center;
  align-items: center;
  background-color: #AEC4BA;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 2px rgba(0, 0, 0, .1);
`;
export const LabelBtnText = styled.Text`
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
`;