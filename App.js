import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './screens/SignInScreen';
import AutofillOtpScreen from './screens/AutofillOtpScreen';
import HomeScreen from './screens/HomeScreen';
import DrawerNavigation from './Navigation/Drawer/drawerNavigation';
import { NavigationContainer } from '@react-navigation/native-stack';




export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>

      {/* <HomeScreen/>
      {/* <AutofillOtpScreen/> */}
      

      {/* <SignInScreen/> */} 

      <DrawerNavigation/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
