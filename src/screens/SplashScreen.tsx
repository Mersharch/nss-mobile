import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import NLogo from "@assets/images/Logo.png";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
  Easing,
  runOnJS,
} from "react-native-reanimated";

const SplashScreen = ({ callback }: { callback: () => void }) => {
  const translateY = useSharedValue(-200); // Start above the screen
  const rotation = useSharedValue(0);

  const logFinished = () => {
    return callback();
  };

  useEffect(() => {
    const dropDuration = 1000;
    const rotationDuration = 6000; // Total duration of one rotation sequence

    translateY.value = withTiming(
      0,
      {
        duration: dropDuration,
        easing: Easing.bounce,
      },
      () => {
        // Start rotation after drop is complete
        rotation.value = withSequence(
          withTiming(90, { duration: 1000, easing: Easing.inOut(Easing.quad) }),
          withTiming(-90, {
            duration: 2000,
            easing: Easing.inOut(Easing.quad),
          }),
          withTiming(90, { duration: 2000, easing: Easing.inOut(Easing.quad) }),
          withTiming(
            0,
            {
              duration: 1000,
              easing: Easing.inOut(Easing.quad),
            },
            (finished) => {
              if (finished) {
                runOnJS(logFinished)();
              }
            }
          )
        );
      }
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: translateY.value },
        { rotate: `${rotation.value}deg` },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.Image source={NLogo} style={[styles.logo, animatedStyle]} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
});
