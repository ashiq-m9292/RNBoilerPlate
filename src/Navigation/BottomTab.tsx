import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import screens from '../Screens/Screens';


const Tab = createBottomTabNavigator();
const BottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={screens.Home} />
        </Tab.Navigator>
    );
}

export default BottomTab;
