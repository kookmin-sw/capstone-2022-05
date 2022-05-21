import React, { FC, useEffect, useRef } from 'react';
import { RNCamera } from 'react-native-camera';
import * as style from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../RootStackParams';
import { postAlarm } from '../../api/babysitter'

type mainScreenProp = StackNavigationProp<RootStackParamList, 'BSMain'>;

const CameraScreen: FC = (props) => {
    const navigation = useNavigation<mainScreenProp>();
    let formData = new FormData();

    const cameraRef = useRef(null)
    const takePhoto = async() => {
        if (cameraRef !== null) {
            const data = await cameraRef.current.takePictureAsync({
                quality: 1,
                exif: true,
            });
            console.log('data', data)
			formData.append('img', {
				uri: data.uri,
				type: 'image/jpg',
				name: 'alarmimg.jpg',
            });
            postAlarm(1, formData)
            navigation.navigate('BabyIndi')
        }

    }

    useEffect(() => {
        var id = props.route.params.id
        if(id) {
            formData.append('alarmCode', id)
            var alarmText = ""
            if (id === 1) alarmText = "밥을 먹었어요"
            else if (id === 2) alarmText = "자는 중이에요"
            else if (id === 3) alarmText = "응가 했어요"
            else if (id === 4) alarmText = "목욕 했어요"
            formData.append('alarmText', alarmText)
        }
    }, [props])

    return (
        <>
            <RNCamera
                style={{ width: '100%', height: '80%' }}
                type={RNCamera.Constants.Type.back}
                captureAudio={false}
                ref = {cameraRef}
            />
            <style.CameraBtnView>
                <style.CameraTouchable onPress={() => { takePhoto() }}>
                    <style.CameraBtn />
                </style.CameraTouchable>
            </style.CameraBtnView>
        </>
    )
};



export default CameraScreen;