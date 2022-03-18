import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './src/pages/Main';
import AuthScreen from './src/pages/Auth';
import BSMainScreen from './src/pages/BabysitterMain';
import InvitationScreen from './src/pages/InvitationScreen';
import BabyIndiScreen from "./src/pages/BabyIndi";
import RegisterScreen from './src/pages/Register';
import SetInfoParent from './src/pages/InfoParent/Set';
import EditInfoParent from './src/pages/InfoParent/Edit';
import DisplayInfoParent from './src/pages/InfoParent/Display';
import SetInfoBS from './src/pages/InfoBabysitter/Set';
import EditInfoBS from './src/pages/InfoBabysitter/Edit';
import DisplayInfoBS from './src/pages/InfoBabysitter/Display';
import {RootStackParamList} from './src/RootStackParams';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="BSMain" component={BSMainScreen} />
        <Stack.Screen name="Invitation" component={InvitationScreen} />
        <Stack.Screen name="BabyIndi" component={BabyIndiScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="SetInfoParent" component={SetInfoParent} />
        <Stack.Screen name="EditInfoParent" component={EditInfoParent} />
        <Stack.Screen name="DisplayInfoParent" component={DisplayInfoParent} />
        <Stack.Screen name="SetInfoBS" component={SetInfoBS} />
        <Stack.Screen name="EditInfoBS" component={EditInfoBS} />
        <Stack.Screen name="DisplayInfoBS" component={DisplayInfoBS} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}