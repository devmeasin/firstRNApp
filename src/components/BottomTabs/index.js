import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../../screen/Home';
import Login from '../../screen/Login';
import SplashScreen from '../../screen/SplashScreen';


const BottomTabs = () => {

    const Tab = createBottomTabNavigator();

    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home' : 'home-outline';
                    } else if (route.name === 'Login') {
                        iconName = focused ? 'gift' : 'gift-outline';
                    } else if (route.name === 'SplashScreen') {
                        iconName = focused ? 'construct' : 'construct-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="SplashScreen" component={SplashScreen}
                options={{ headerShown: false }} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Login" component={Login} />
        </Tab.Navigator>

    );
}

export default BottomTabs;