import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';


// const TakePhoto = () => {
//     const cameraRef = React.useRef(null); // useRef로 camera를 위한 ref를 하나 만들어주고

//     const takePhoto = async () => {
//         console.log('cameraRef', cameraRef);
//         if (cameraRef) {
//         const data = await cameraRef.current.takePictureAsync({
//             quality: 1,
//             exif: true,
//         });
//         }
//     };
// }

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Button = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 10px solid lightgrey;
  background-color: pink;
`;

const Touchable = styled.TouchableOpacity``;

const CameraScreen: FC  = () => {
  return(
      <>
        <RNCamera
            style={{width: '100%', height: '80%'}}
            type={RNCamera.Constants.Type.back}
            captureAudio={false}
        />
    
        <View>
        <Touchable>
            <Button />
        </Touchable>
        </View>
      </>
  )
};



export default CameraScreen;