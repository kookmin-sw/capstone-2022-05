import {useNavigation} from '@react-navigation/native';
import React, { FC }  from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from '../RootStackParams';

type mainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;

const Main: FC = () => {
  const navigation = useNavigation<mainScreenProp>();

  return (
    <View style={styles.container}>
        <Button title="Login" onPress={() => navigation.navigate('Auth')} />
        <Button title="Parents" onPress={() => navigation.navigate('SetInfoParent')} />
        <Button title="BabySitter" onPress={() => navigation.navigate('SetInfoBS')} />
        <Button title="BabyMain" onPress={() => navigation.navigate('BSMain')} />
    </View>
  );
};
export default Main;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});