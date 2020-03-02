import React from "react";
import { View, StyleSheet } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

const SwipeableContainer = props => {
  let _swipeableRow;

  const updateRef = ref => {
    _swipeableRow = ref;
  };

  const close = () => {
    _swipeableRow.close();
  };

  const renderLeftActions = (progress, dragX) => {
    const { pageComp: NextComp } = props.swipeNavigation.left;

    return (
      <View style={styles.extraLeftScreen}>
        <NextComp renderMock />
      </View>
    );
  };

  const renderRightActions = (progress, dragX) => {
    const { pageComp: NextComp } = props.swipeNavigation.right;

    return (
      <View style={styles.extraLeftScreen}>
        <NextComp renderMock />
      </View>
    );
  };

  const { left, right } = props.swipeNavigation;

  return (
    <Swipeable
      ref={updateRef}
      {...(left
        ? {
            onSwipeableLeftOpen: () => {
              props.navigation.navigate(left.pageName);
              close();
            },
            renderLeftActions: renderLeftActions,
          }
        : {})}
      {...(right
        ? {
            onSwipeableRightOpen: () => {
              props.navigation.navigate(right.pageName);
              close();
            },
            renderRightActions: renderRightActions,
          }
        : {})}
      containerStyle={{ backgroundColor: "gray" }}
    >
      {props.children}
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  extraLeftScreen: {
    flex: 1,
    backgroundColor: "orange",
  },
});

export default SwipeableContainer;
