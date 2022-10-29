import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './screens/Details';
import Home from './screens/Home';
import Search from './screens/Search';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Details" component={Details} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;