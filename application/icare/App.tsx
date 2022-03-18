import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './src/pages/Main';
import AuthScreen from './src/pages/Auth';
import RegisterScreen from './src/pages/Register';
import SetInfoParent from './src/pages/InfoParent/Set';
import EditInfoParent from './src/pages/InfoParent/Edit';
import SetInfoBS from './src/pages/InfoBabysitter/Set';
import EditInfoBS from './src/pages/InfoBabysitter/Edit';
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
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="SetInfoParent" component={SetInfoParent} />
        <Stack.Screen name="EditInfoParent" component={EditInfoParent} />
        <Stack.Screen name="SetInfoBS" component={SetInfoBS} />
        <Stack.Screen name="EditInfoBS" component={EditInfoBS} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}