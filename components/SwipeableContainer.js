import React from "react";
import { View, StyleSheet } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const SwipeableContainer = props => {
  let _swipeableRow;

  const updateRef = ref => {
    _swipeableRow = ref;
  };

  const close = () => {
    _swipeableRow.close();
  };

  const renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });

    const { pageComp: NextComp } = props.swipeNavigation.left;

    return (
      //   <TouchableWithoutFeedback onPress={close}>
      <View style={styles.extraLeftScreen}>
        {/* <Animated.View style={{ transform: [{ translateX: trans }], flex: 1 }}> */}
        <NextComp renderMock />
        {/* </Animated.View> */}
      </View>
    );
  };

  const renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });

    const { pageComp: NextComp } = props.swipeNavigation.right;

    return (
      //   <TouchableWithoutFeedback onPress={close}>
      <View style={styles.extraLeftScreen}>
        {/* <Animated.View style={{ transform: [{ translateX: trans }], flex: 1 }}> */}
        <NextComp renderMock />
        {/* </Animated.View> */}
      </View>
    );
  };

  return (
    <Swipeable
      ref={updateRef}
      {...(props.swipeNavigation.left
        ? {
            onSwipeableLeftOpen: () => {
              props.navigation.navigate(props.swipeNavigation.left.pageName);
              close();
            },
            renderLeftActions: renderLeftActions,
          }
        : {})}
      {...(props.swipeNavigation.right
        ? {
            onSwipeableRightOpen: () => {
              props.navigation.navigate(props.swipeNavigation.right.pageName);
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
  stickyText: {
    fontSize: 28,
    color: "white",
    backgroundColor: "red",
  },
  text: {
    color: "white",
    fontSize: 16,
    backgroundColor: "green",
    padding: 10,
    flex: 1,
    width: "100%",
  },
});

export default SwipeableContainer;
