import {useNavigation} from '@react-navigation/native';
import React, { FC }  from 'react';
import {View, Text, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../RootStackParams';

type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;

const MainScreen: FC  = () => {
    const navigation = useNavigation<mainScreenProp>();
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Main Screen</Text>
            <Button title="Login" onPress={() => navigation.navigate('Auth')} />
        </View>
    );
}

export default MainScreen;