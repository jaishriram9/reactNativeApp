import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from '../Stack/stackNavigator';

const Drawer = createDrawerNavigator();


const drawerNavigation = () => {
  return ß
     (
        <Drawer.Navigator>
          <Drawer.Screen name="Main" component={StackNavigator} />
        </Drawer.Navigator>
  )
}

export default drawerNavigation
