import { Image, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import NLogo from "@assets/images/Logo.png";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
  Easing,
  withRepeat,
} from "react-native-reanimated";

const SplashScreen = () => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withSequence(
        withTiming(90, { duration: 1000, easing: Easing.inOut(Easing.quad) }),
        withTiming(-90, { duration: 2000, easing: Easing.inOut(Easing.quad) }),
        withTiming(90, { duration: 2000, easing: Easing.inOut(Easing.quad) }),
        withTiming(0, { duration: 1000, easing: Easing.inOut(Easing.quad) })
      ),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
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
    borderRadius: 100,
  },
});
