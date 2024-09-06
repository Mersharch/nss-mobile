import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OtpChannel from '../screens/AuthScreens/OtpChannel';
import OtpVerification from '../screens/AuthScreens/OtpVerification';
import SignIn from '../screens/AuthScreens/SignIn';
import SignUp from '../screens/AuthScreens/SignUp';
import BottomTabs from './Tabs';
import ArticleDetails from '../screens/ArticleScreens/ArticleDetails';

const RootNavigation = () => {
    const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="SignIn"
        >
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="OtpChannel" component={OtpChannel} />
          <Stack.Screen name="OtpVerification" component={OtpVerification} />
          <Stack.Screen name="Tabs" component={BottomTabs} />
          <Stack.Screen name="ArticleDetails" component={ArticleDetails} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default RootNavigation