import {useNavigation} from '@react-navigation/native';
import React, { FC }  from 'react';
import { View, Text } from "react-native";
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../../RootStackParams';
import * as style from './styles';
import LabelButton from '../../components/LabelButton';
import LabelInput from "../../components/LabelInput"

type mainScreenProp = StackNavigationProp<RootStackParamList, 'Invitation'>;

const InvitationScreen: FC  = () => {
    const navigation = useNavigation<mainScreenProp>();
    return (
        <View>
            <Text>초대해줘잉</Text>
        </View>
    )
};
export default InvitationScreen;