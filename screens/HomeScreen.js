import React, { useRef } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TapGestureHandler, State, LongPressGestureHandler } from "react-native-gesture-handler";

import SwipeableContainer from "../components/SwipeableContainer";
import SettingScreen from "./SettingScreen";
import MapScreen from "./MapScreen";

const HomeScreen = props => {
  const doublePressRef = useRef();

  const _onSingleTap = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert("I'm touched");
    }
  };

  const _onLongPress = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert("I'm long press");
    }
  };

  const _onDoubleTap = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert("I'm double");
    }
  };

  let content = (
    <View style={{ height: "100%" }}>
      <View style={styles.screen}>
        <LongPressGestureHandler onHandlerStateChange={_onLongPress} minDurationMs={800}>
          <TapGestureHandler onHandlerStateChange={_onSingleTap} waitFor={doublePressRef}>
            <TapGestureHandler
              ref={doublePressRef}
              onHandlerStateChange={_onDoubleTap}
              numberOfTaps={2}
            >
              <Text style={{ color: "white" }}>Home Screeen</Text>
            </TapGestureHandler>
          </TapGestureHandler>
        </LongPressGestureHandler>
      </View>
    </View>
  );

  if (!props.renderMock) {
    content = (
      <SwipeableContainer
        navigation={props.navigation}
        swipeNavigation={{
          left: {
            pageName: "Setting",
            pageComp: SettingScreen,
          },
          right: {
            pageName: "Map",
            pageComp: MapScreen,
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
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const HomeScreenNavOptions = {};

export default HomeScreen;
