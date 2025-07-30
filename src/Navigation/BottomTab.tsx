import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import screens from '../Screens/Screens';


const Tab = createBottomTabNavigator();
const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen name='Home' component={screens.Home} />
        </Tab.Navigator>
    );
}

export default BottomTab;
