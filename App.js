import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import Detail from './screens/detail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaView style ={styles.container}>
      <NavigationContainer>
        <Stack.Navigator> 
          <Stack.Screen name='home' component={Home} options ={{title : "Home Navigation"}} />
          <Stack.Screen name='detail' component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
});
