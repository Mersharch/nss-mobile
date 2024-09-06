
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import Colors from "./src/constants/colors";
import { StatusBar } from "expo-status-bar";
import RootNavigation from "./src/navigation/RootNavigation";
import { useFonts } from "expo-font";

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.primary,
      secondary: Colors.secondary,
    },
  };

  const [fontsLoaded] = useFonts({
    Inter: require("./assets/fonts/Inter-4.0/InterVariable.ttf"),
  });

  return (
    <PaperProvider theme={theme}>
      <StatusBar style="auto" />
      <RootNavigation />
    </PaperProvider>
  );
}
