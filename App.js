/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screen/Home';
import Login from './src/screen/Login';
import SplashScreen from './src/screen/SplashScreen';
import BottomTabs from './src/components/Navigations/BottomNavigator';


const App = () => {

  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 5000);
  }, []);

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator>
        {
          isSplash && <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        }

        <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>


  );
};



export default App;