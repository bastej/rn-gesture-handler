import React from "react";
import { View, StyleSheet, Text } from "react-native";

import SwipeableContainer from "../components/SwipeableContainer";
import HomeScreen from "./HomeScreen";

const MapScreen = props => {
  if (props.renderMock) {
    return (
      <View style={{ height: "100%" }}>
        <View style={styles.screen}>
          <Text style={{ color: "white" }}>Map Screeen</Text>
        </View>
      </View>
    );
  }

  return (
    <SwipeableContainer
      navigation={props.navigation}
      swipeNavigation={{
        left: {
          pageName: "Home",
          pageComp: HomeScreen,
        },
      }}
    >
      <View style={{ height: "100%" }}>
        <View style={styles.screen}>
          <Text style={{ color: "white" }}>Map Screeen</Text>
        </View>
      </View>
    </SwipeableContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const MapScreenNavOptions = {};

export default MapScreen;
