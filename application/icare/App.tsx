import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './pages/Main';
import AuthScreen from './pages/Auth';
import BSMainScreen from "./pages/Babysitter";
import {RootStackParamList} from './pages/RootStackParams';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="BSMain" component={BSMainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}