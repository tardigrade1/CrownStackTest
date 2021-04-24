import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Home from './Home'
import Detail from './Detail'

const Stack = createStackNavigator()

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{ title: "Musical Hits" }} />
    <Stack.Screen 
      name="Detail" 
      component={Detail} 
      options={{ title: "Detail" }} />
  </Stack.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <HomeStack />
    </NavigationContainer>
  );
};

export default App;