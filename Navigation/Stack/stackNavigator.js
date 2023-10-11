
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigator from '../Bottom/bottomNavigator';

const Stack = createStackNavigator();

const stackNavigator = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={BottomNavigation} />
    </Stack.Navigator>
  )
}

export default stackNavigator




