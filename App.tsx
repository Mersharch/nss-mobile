import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import Colors from "./src/constants/colors";
import { StatusBar } from "expo-status-bar";
import RootNavigation from "./src/navigation/RootNavigation";
import {
  Inter_900Black,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import * as Splash from "expo-splash-screen";
import { useEffect, useState } from "react";
import SplashScreen from "@screens/SplashScreen";
import { useFonts } from "expo-font";

Splash.preventAutoHideAsync();

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.primary,
      secondary: Colors.secondary,
    },
  };

  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_400Regular,
    InterSemi: Inter_600SemiBold,
    InterBold: Inter_700Bold,
    InterBlack: Inter_900Black,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      Splash.hideAsync();
      setAppReady(true);
    }
  }, [fontsLoaded, fontError]);

  if (!appReady || !animationFinished) {
    return <SplashScreen callback={() => setAnimationFinished(true)} />;
  }

  return (
    <PaperProvider theme={theme}>
      <StatusBar style="auto" />
      <RootNavigation />
    </PaperProvider>
  );
}
