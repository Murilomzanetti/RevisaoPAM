import * as React from "react";
import {Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AcessScreen from "./src/screens/AcessScreen";
import CadastrateScreen from "./src/screens/CadastrateScreen"
import LoginScreen from "./src/screens/LoginScreen"

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AcessScreen">
        <Stack.Screen 
          name="AcessScreen" 
          component={AcessScreen} 
          
        />
        <Stack.Screen 
          name="CadastrateScreen"
          component={CadastrateScreen}
          
        />
        <Stack.Screen 
          name="LoginScreen"
          component={LoginScreen}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}