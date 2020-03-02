import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import SwipeableContainer from "../components/SwipeableContainer";
import HomeScreen from "./HomeScreen";

const SettingScreen = props => {
  let content = (
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

  if (!props.renderMock) {
    content = (
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
        {content}
      </SwipeableContainer>
    );
  }

  return content;
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
