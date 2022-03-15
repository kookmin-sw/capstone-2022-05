import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './src/pages/Main';
import AuthScreen from './src/pages/Auth';
import BSMainScreen from "./src/pages/Babysitter";
import {RootStackParamList} from './src/RootStackParams';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="BSMain" component={BSMainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}