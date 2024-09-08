import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import Colors from "./src/constants/colors";
import { StatusBar } from "expo-status-bar";
import RootNavigation from "./src/navigation/RootNavigation";
import { useFonts } from "expo-font";
import * as Splash from "expo-splash-screen";
import { useEffect, useState } from "react";
import SplashScreen from "@screens/SplashScreen";

Splash.preventAutoHideAsync();

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.primary,
      secondary: Colors.secondary,
    },
  };

  const [fontsLoaded, fontError] = useFonts({
    Inter: require("./assets/fonts/Inter-4.0/InterVariable.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      Splash.hideAsync();
      // set timeout for 3 seconds then set appready to true
      setTimeout(() => {
        setAppReady(true);
      }, 3000);
    }
  }, [fontsLoaded, fontError]);

  if (!appReady) {
    return (
      // <AnimatedSplashScreen
      //   onAnimationFinish={(isCancelled) => {
      //     if (!isCancelled) {
      //       setSplashAnimationFinished(true);
      //     }
      //   }}
      // />
      <SplashScreen />
    );
  }

  return (
    <PaperProvider theme={theme}>
      <StatusBar style="auto" />
      <RootNavigation />
    </PaperProvider>
  );
}
