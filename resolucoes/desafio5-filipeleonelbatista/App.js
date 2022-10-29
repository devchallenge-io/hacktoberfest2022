import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Details from './src/screens/Details';
import Home from './src/screens/Home';
import Search from './src/screens/Search';

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { StatusBar as RNStatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import { MovieContextProvider } from './src/context/MovieContext';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: "center",
      alignItems: "center",
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: "#F72585"
    }}
    onPress={onPress}
  >
    <View>{children}</View>
  </TouchableOpacity>
)

function App() {
  return (
    <MovieContextProvider>
      <RNStatusBar
        barStyle="light-content"
        backgroundColor="#000000"
        style={{ height: RNStatusBar.currentHeight }}
      />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Home'
          screenOptions={{ headerShown: false }}
          tabBarOptions={{
            showLabel: false,
            style: {
              backgroundColor: "#FFF",
              height: 70,
              ...styles.shadow,
            }
          }}
        >
          <Tab.Screen name="Search" component={Search} options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Feather name="search" size={24} color={focused ? "#e32f45" : "black"} />
              </View>
            )
          }} />
          <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Feather name="home" size={24} color={"white"} />
              </View>
            ),
            tabBarButton: (props) => (
              <CustomTabBarButton {...props} />
            )
          }} />
          <Tab.Screen name="Details" component={Details} options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <MaterialCommunityIcons name="movie-open-outline" size={24} color={focused ? "#e32f45" : "black"} />
              </View>
            )
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </MovieContextProvider>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  }
})

export default App;