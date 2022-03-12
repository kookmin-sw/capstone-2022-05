import React, { FC } from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackParams';

type authScreenProp = StackNavigationProp<RootStackParamList, 'Auth'>;

const AuthScreen: FC = () => {
    const navigation = useNavigation<authScreenProp>();

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Auth Screen</Text>
            <Button title="Login" onPress={() => navigation.navigate('Main')} />
        </View>
    );
}

export default AuthScreen;