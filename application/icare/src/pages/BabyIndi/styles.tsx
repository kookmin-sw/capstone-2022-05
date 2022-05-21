import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  height: 100%;
  padding: 0;
  background: #fff;
  flex: 1;
`;
export const InfoView = styled.View`
  width: 80%;
  padding: 20px 0 40px 0;
  margin: 0 auto 0 auto;
`;
export const Profile = styled.View`
  height: 140px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;
export const ProfilePhoto = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  border: 1px solid #000;
`;
export const ProfileInfo = styled.View`
  flex: 1;
  margin-left: 20px;
  justify-content: space-between;
  text-align: center;
`;
export const StrongText = styled.Text`
  font-size: 24px;
  font-weight: 800;
`;
export const LightText = styled.Text`
  font-size: 16px;
`;
export const DetailInfo = styled.View``;
export const DetailText = styled.Text`
  margin: 12px 0;
  border: 1px solid #DBDBDB;
  border-radius: 10px;
  padding: 10px;
  font-size: 14px;
  font-weight: 200;
`;
export const AlertView = styled.View`
  width: 80%;
  padding-bottom: 40px;
  margin: 0 auto;
`;
export const AlertBtn = styled.TouchableOpacity`
  justify-content: center;
  background-color: #F7F7F8;
  padding: 0 16px;
  margin-top: 12px;
  height: 48px;
  border-radius: 10px;
  box-shadow: 0 2px rgba(0, 0, 0, .1);
  Text{
    font-size: 18px;
    font-weight: 200;
  }
`;
export const Workbutton = styled.TouchableOpacity`
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
export const sendIcon = styled.Image`
  position: absolute;
  right: 16px;
  width: 22px;
  height: 22px;
`;
export const AlertModal = styled.View`
  position: absolute;
  top: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  z-index: 10;
`;
export const ModalContainer = styled.View`
  background: #fff;
  width: 80%;
  padding: 40px 20px;
  align-items: center;
  border-radius: 10px;
`;
export const CloseBtn = styled.TouchableOpacity`
  top: 10px;
  right: 20px;
  position: absolute;
`;
export const CloseText = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;
export const MsgInput = styled.TextInput`
  margin: 20px 0;
  width: 100%;
  height: 132px;
  border: 1px solid #DBDBDB;
  border-radius: 10px;
  padding: 10px;
  font-size: 14px;
  font-weight: 200;
`;
export const ModalBtnView = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
export const ModalBtn = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 48px;
  padding: 0 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, .1);
`;
export const BtnLabel = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;
export const SensorBtn = styled.TouchableOpacity`
  justify-content: center;
  background-color: #FFFFFF;
  padding: 0 16px;
  margin-top: 12px;
  height: 48px;
  border-radius: 10px;
`;