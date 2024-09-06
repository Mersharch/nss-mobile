import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Button } from "react-native-paper";
import Colors from "../../constants/colors";
import SafeAreaProvider from "../../components/SafeAreaProvider";
import AppHeader from "../../components/Headers/AppHeader";
import { getScreenPercent } from "../../utils/responsiveness";
import { useFonts } from "expo-font";
import OtpSelect from "../../components/OtpSelect";

const OtpChannel = ({ navigation }: any) => {
  const [fontsLoaded] = useFonts({
    Inter: require("../../../assets/fonts/Inter-4.0/InterVariable.ttf"),
  });

  const [channel, setChannel] = useState<"email" | "phone">("email");

  return (
    <SafeAreaProvider>
      <AppHeader
        right={
          <Button
            mode="contained"
            onPress={() => navigation.navigate("SignIn")}
            labelStyle={styles.headerLeftButtonLabel}
            // contentStyle={styles.headerLeftButton}
          >
            Sign In
          </Button>
        }
      />
      <View style={styles.container}>
        <View style={{ gap: 32 }}>
          {/* 3 side by side divs that create separated bars witht he first one using the primary color */}
          <View style={styles.loader}>
            <View
              style={{
                borderRadius: 24,
                backgroundColor: Colors.primary,
                height: 5,
                width: "33%",
              }}
            />
            <View
              style={{
                borderRadius: 24,
                backgroundColor: Colors.primary,
                height: 5,
                width: "33%",
              }}
            />
            <View
              style={{
                borderRadius: 24,
                backgroundColor: Colors.gray10,
                height: 5,
                width: "33%",
              }}
            />
          </View>
          <View style={{ gap: 16 }}>
            <Text style={styles.title}>Select OTP channel</Text>
            <Text style={styles.subTitle}>
              A One-Time Passcode (OTP) will be sent to you. Please select the
              channel to receive the OTP.
            </Text>
          </View>
        </View>
        <View style={styles.formGroup}>
          <OtpSelect
            type="email"
            content="emm**@i**a**"
            checked={channel === "email"}
            setChannel={setChannel}
          />
          <OtpSelect
            type="phone"
            content="024****990"
            checked={channel === "phone"}
            setChannel={setChannel}
          />
          <Button
            mode="contained"
            onPress={() =>
              navigation.navigate("OtpVerification", { currentFlow: "SignUp" })
            }
          >
            Send OTP
          </Button>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default OtpChannel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },

  headerLeftButton: {
    height: getScreenPercent(32),
    paddingVertical: 6,
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  headerLeftButtonLabel: {
    fontSize: getScreenPercent(14),
    fontWeight: "600",
    color: Colors.secondary,
    lineHeight: 19.6,
    letterSpacing: -0.14,
  },

  loader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
  },

  title: {
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: getScreenPercent(20),
    lineHeight: 28,
    letterSpacing: -0.2,
    color: Colors.functionalText,
  },

  subTitle: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: getScreenPercent(14),
    lineHeight: 19.6,
    letterSpacing: -0.14,
    color: Colors.gray100,
    textAlign: "justify",
  },

  formGroup: {
    marginTop: 32,
    gap: 16,
  },
});
