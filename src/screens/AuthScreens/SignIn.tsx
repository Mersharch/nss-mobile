import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import Colors from "../../constants/colors";
import SafeAreaProvider from "../../components/SafeAreaProvider";
import AppHeader from "../../components/Headers/AppHeader";
import { getScreenPercent } from "../../utils/responsiveness";
import Banner from "../../components/Banner";
import Input from "../../components/Input";
import InfoBanner from "../../components/InfoBanner";
import { AnimatePresence } from "moti";

const SignIn = ({ navigation }: any) => {
  const [error, setError] = useState<boolean>(false);
  return (
    <SafeAreaProvider>
      <AppHeader
        right={
          <Button
            onPress={() => navigation.navigate("SignUp")}
            //   labelStyle={styles.headerLeftButtonLabel}
            // contentStyle={styles.headerLeftButton}
          >
            Create an account
          </Button>
        }
      />
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={{ gap: 32 }}>
          <Text style={styles.title}>Sign in to your account</Text>
        </View>
        <View style={styles.formGroup}>
          <AnimatePresence>
            {error && (
              <Banner
                content="There’s no account linked to this email. Create an account if this is your first time."
                icon
              />
            )}
          </AnimatePresence>
          <Input label="Email" placeholder="Enter your email address" />
          <InfoBanner content="We'll send you an OTP to confirm your account" />

          <Button
            mode="contained"
            onPress={() =>
              navigation.navigate("OtpVerification", { currentFlow: "SignIn" })
            }
          >
            Send code
          </Button>
          <Button onPress={() => setError(!error)}>
            I don't want to sign in
          </Button>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
};

export default SignIn;

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

  title: {
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: getScreenPercent(20),
    lineHeight: 28,
    letterSpacing: -0.2,
    color: Colors.functionalText,
    marginTop: 32,
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
});
