import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar';
import Home from '../screens/Home';
import Preload from '../screens/Preload';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator
        screenOptions={{
            headerShown:false
        }}
        tabBar={ props => <CustomTabBar {...props} /> }
    >
        <Tab.Screen
            name='Home'
            component={Home}
            options={{
                unmountOnBlur: true
            }}
        />
        <Tab.Screen
            name='Preload'
            component={Preload}
            options={{
                unmountOnBlur: true
            }}
        />
    </Tab.Navigator>
);