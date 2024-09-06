import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Button } from "react-native-paper";
import Colors from "../../constants/colors";
import SafeAreaProvider from "../../components/SafeAreaProvider";
import AppHeader from "../../components/Headers/AppHeader";
import { getScreenPercent } from "../../utils/responsiveness";
import { useFonts } from "expo-font";
import Banner from "../../components/Banner";
import OtpTextInput from "react-native-text-input-otp";
import OtpRedirectModal from "../../components/Modals/OtpRedirectModal";

const OtpVerification = ({ navigation, route }: any) => {
  const [error, setError] = useState<boolean>(false);
  const [state, setState] = useState<string>("Verify");
  const [otp, setOtp] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<string>("");

  const { currentFlow } = route.params;

  const handleVerification = () => {
    // set show to true for 2 seconds and then set to false
    setButtonDisabled(true);
    setLoading(true);
    setState("Verifying OTP");
    setTimeout(() => {
      setLoading(false);
      setState("Verified!");
      setShow(true);
    }, 3000);
    setTimeout(() => {
      setShow(false);
      navigation.navigate("Tabs", { screen: "Feed" });
    }, 5000);
    return;
  };

  return (
    <SafeAreaProvider>
      <AppHeader
        right={
          currentFlow === "SignUp" ? (
            <Button
              mode="contained"
              disabled={buttonDisabled}
              onPress={() => navigation.navigate("SignIn")}
              labelStyle={styles.headerLeftButtonLabel}
              // contentStyle={styles.headerLeftButton}
            >
              Sign In
            </Button>
          ) : (
            <Button
              onPress={() => navigation.navigate("SignUp")}
              disabled={buttonDisabled}
              // labelStyle={styles.headerLeftButtonLabel}
              // contentStyle={styles.headerLeftButton}
            >
              Create an account
            </Button>
          )
        }
      />
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={{ gap: 32 }}>
          {/* 3 side by side divs that create separated bars witht he first one using the primary color */}
          {currentFlow === "SignUp" && (
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
                  backgroundColor: Colors.primary,
                  height: 5,
                  width: "33%",
                }}
              />
            </View>
          )}
          <View style={{ gap: 16 }}>
            <Text
              style={[
                styles.title,
                currentFlow === "SignIn" && { marginTop: 32 },
              ]}
            >
              Enter your OTP
            </Text>
            <Text style={styles.subTitle}>
              We have sent you a six-digit OTP via e***@i******h.a****a
            </Text>
          </View>
        </View>
        <View style={styles.formGroup}>
          {error && (
            <Banner
              content="There’s no account linked to this email. Create an account if this is your first time."
              icon
            />
          )}
          <View style={{ gap: 8 }}>
            <Text style={styles.subTitle}>Enter your six-digit OTP</Text>
            <OtpTextInput
              otp={otp}
              setOtp={setOtp}
              digits={6}
              style={styles.otpInput}
            />
          </View>

          <Button
            mode="contained"
            onPress={handleVerification}
            loading={loading}
            disabled={buttonDisabled}
          >
            {state}
          </Button>
          <Button disabled={buttonDisabled}>Resend code</Button>
        </View>
      </KeyboardAvoidingView>
      {show && <OtpRedirectModal redirect={redirect} navigation={navigation} />}
    </SafeAreaProvider>
  );
};

export default OtpVerification;

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
  },

  formGroup: {
    marginTop: 32,
    gap: 16,
  },

  otpInput: {
    flexDirection: "row",
    width: getScreenPercent(48),
    height: getScreenPercent(48),
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Colors.gray30,
    backgroundColor: Colors.secondary,
  },
});
