import React, { FC } from 'react';
import { RNCamera } from 'react-native-camera';
import * as style from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../RootStackParams';


type mainScreenProp = StackNavigationProp<RootStackParamList, 'BSMain'>;

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

const CameraScreen: FC = () => {
    const navigation = useNavigation<mainScreenProp>();
    return (
        <>
            <RNCamera
                style={{ width: '100%', height: '80%' }}
                type={RNCamera.Constants.Type.back}
                captureAudio={false}
            />
            <style.CameraBtnView>
                <style.CameraTouchable onPress={() => { navigation.navigate('BabyIndi') }}>
                    <style.CameraBtn />
                </style.CameraTouchable>
            </style.CameraBtnView>
        </>
    )
};



export default CameraScreen;