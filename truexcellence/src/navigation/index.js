import React from 'react';

// ** navigators
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// ** Screens
import Main from '../screens/Main';
import {Splash} from "../screens/Splash";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Splash'} component={Splash} />
        <Stack.Screen name={'Main'} component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainStack;
