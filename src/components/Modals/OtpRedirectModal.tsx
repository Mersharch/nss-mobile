import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import React from "react";
import { getScreenPercent, getScreenWidth } from "../../utils/responsiveness";
import Colors from "../../constants/colors";

interface Props {
    redirect: string
    navigation:any
}

const OtpRedirectModal = ({navigation, redirect}: Props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.text}>OTP correct. Redirecting...</Text>
    </View>
  );
};

export default OtpRedirectModal;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.9,
    position: "absolute",
    top: getScreenPercent(70),
    left: 0,
    zIndex: 20,
    height: "100%",
    width: getScreenWidth(390),
    backgroundColor: Colors.gray10,
    gap: 16,
  },

  text: {
    fontFamily: "Inter",
    fontSize: getScreenPercent(14),
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 19.6,
  },
});
