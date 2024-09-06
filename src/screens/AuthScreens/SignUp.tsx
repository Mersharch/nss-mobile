import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { Button } from "react-native-paper";
import Colors from "../../constants/colors";
import SafeAreaProvider from "../../components/SafeAreaProvider";
import AppHeader from "../../components/Headers/AppHeader";
import { getScreenPercent } from "../../utils/responsiveness";
import { useFonts } from "expo-font";
import Banner from "../../components/Banner";
import Input from "../../components/Input";

const SignUp = ({ navigation }: any) => {
  const [fontsLoaded] = useFonts({
    Inter: require("../../../assets/fonts/Inter-4.0/InterVariable.ttf"),
  });
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled
    >
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
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
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
                  backgroundColor: Colors.gray10,
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
              <Text style={styles.title}>Create a new account</Text>
              <Text style={styles.subTitle}>
                Enter your personal information to proceed
              </Text>
            </View>
          </View>
          <View style={styles.formGroup}>
            <Banner
              content="There’s no account linked to this email. Create an account if this is your first time."
              icon
            />
            <View style={{ gap: 16 }}>
              <Input label="Ghana Card PIN" placeholder="GHA - 000000000 - 0" />
              <Input
                label="Phone Number"
                placeholder="0123456789"
                type="number"
              />
              <Input label="Email" placeholder="Enter your email address" />
            </View>

            <Button
              mode="contained"
              onPress={() => navigation.navigate("OtpChannel")}
            >
              Continue
            </Button>
            <Button>I don't want to sign up</Button>
          </View>
        </ScrollView>
      </SafeAreaProvider>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

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
});
