import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";
import MapScreen from "./screens/MapScreen";

const HomeStack = createStackNavigator();
const HomeNavigator = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="HomeDetail" component={gestureHandlerRootHOC(HomeScreen)} />
  </HomeStack.Navigator>
);
const SettingStack = createStackNavigator();
const SettingNavigator = () => (
  <SettingStack.Navigator headerMode="none">
    <SettingStack.Screen name="SettingDetail" component={gestureHandlerRootHOC(SettingScreen)} />
  </SettingStack.Navigator>
);
const MapStack = createStackNavigator();
const MapNavigator = () => (
  <MapStack.Navigator headerMode="none">
    <MapStack.Screen name="MapDetail" component={gestureHandlerRootHOC(MapScreen)} />
  </MapStack.Navigator>
);

const MainTab = createBottomTabNavigator();
const MainNavigator = () => (
  <MainTab.Navigator initialRouteName="Home">
    <MainTab.Screen name="Setting" component={gestureHandlerRootHOC(SettingNavigator)} />
    <MainTab.Screen name="Home" component={gestureHandlerRootHOC(HomeNavigator)} />
    <MainTab.Screen name="Map" component={gestureHandlerRootHOC(MapNavigator)} />
  </MainTab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
