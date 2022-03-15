import {useNavigation} from '@react-navigation/native';
import React, { FC }  from 'react';
import {View, Text, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../../RootStackParams';

type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;

const BSMainScreen: FC  = () => {
    const navigation = useNavigation<mainScreenProp>();
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>BSMain Screen</Text>
            <Button title="Main" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default BSMainScreen;