import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import SwipeableContainer from "../components/SwipeableContainer";
import HomeScreen from "./HomeScreen";

const SettingScreen = props => {
  if (props.renderMock) {
    return (
      <View style={{ height: "100%" }}>
        <View style={styles.screen}>
          <Text style={{ color: "white" }}>Setting Screen</Text>
          <Button
            title="Go to Home"
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
        </View>
      </View>
    );
  }

  return (
    <SwipeableContainer
      navigation={props.navigation}
      navigateTo="Home"
      swipeNavigation={{
        right: {
          pageName: "Home",
          pageComp: HomeScreen,
        },
      }}
    >
      <View style={{ height: "100%" }}>
        <View style={styles.screen}>
          <Text style={{ color: "white" }}>Setting Screen</Text>
          <Button
            title="Go to Home"
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
        </View>
      </View>
    </SwipeableContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const SettingScreenNavOptions = {};

export default SettingScreen;
