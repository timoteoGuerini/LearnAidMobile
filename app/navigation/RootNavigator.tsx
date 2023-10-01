import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {reactNavigationTheme} from '../ui/styles/theme';
import Home from '../ui/screens/Home';
import Settings from '../ui/screens/Settings';
import {ImageBackground} from 'react-native';

const Stack = createNativeStackNavigator();
const backgroundUrl =
  'E:/Escritorio/Eter/LearnAid/LearnAid mobile/LearnAidMobile/app/assets/background.png';

function RootNavigator() {
  return (
    <NavigationContainer theme={reactNavigationTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'LearnAid',
            headerShown: true,
            headerTitleStyle: {color: 'orange'},
            headerTitleAlign: 'center',
            headerBackground: () => (
              <ImageBackground
                style={{width: '100%', height: '100%'}}
                source={require(backgroundUrl)}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            title: 'LearnAid',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
