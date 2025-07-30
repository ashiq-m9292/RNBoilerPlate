import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screens from '../Screens/Screens';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >

            <Stack.Screen name='Splash' component={screens.Splash} />

            <Stack.Screen name='Login' component={screens.Login} />

            <Stack.Screen name='Signup' component={screens.Signup} />

        </Stack.Navigator>
    );
}

export default AuthStack;
