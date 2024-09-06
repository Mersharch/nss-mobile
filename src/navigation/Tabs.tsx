import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/MainScreens/Feed";
import Community from "../screens/MainScreens/Community";
import Personnel from "../screens/MainScreens/Personnel";
import Marketplace from "../screens/MainScreens/Marketplace";
import More from "../screens/MainScreens/More";
import Colors from "../constants/colors";
import {
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function BottomTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.gray100,
        // tabBarStyle: {
        //   height: getScreenHeight(80),
        //   backgroundColor: Colors.secondary,
        //   borderTopWidth: 1,
        //   borderStyle: "solid",
        //   borderColor: Colors.gray20,
        //  // paddingTop: 16,
        //   paddingHorizontal: 20,
        // },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: "Inter",
          //   marginTop:10,
          // marginBottom: 24,
        },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({
            color,
          }: {
            focused: boolean;
            color: string;
            size: number;
          }) => (
            <Foundation
              name="megaphone"
              size={24}
              color={color}
              style={{ transform: [{ scaleX: -1 }] }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarIcon: ({
            focused,
            color,
          }: {
            focused: boolean;
            color: string;
            size: number;
          }) => (
            <Ionicons
              name={focused ? "chatbubbles-sharp" : "chatbubbles-outline"}
              size={24}
              color={color}
              style={{ transform: [{ scaleX: -1 }] }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Personnel"
        component={Personnel}
        options={{
          tabBarIcon: ({
            focused,
            color,
          }: {
            focused: boolean;
            color: string;
          }) => (
            <MaterialCommunityIcons
              name={focused ? "account-details" : "account-details-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Marketplace"
        component={Marketplace}
        options={{
          tabBarIcon: ({
            focused,
            color,
          }: {
            focused: boolean;
            color: string;
            size: number;
          }) => (
            <Foundation
              name="megaphone"
              size={24}
              color={color}
              style={{ transform: [{ scaleX: -1 }] }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({
            focused,
            color,
          }: {
            focused: boolean;
            color: string;
            size: number;
          }) => (
            <Ionicons
              name={
                focused ? "ellipsis-horizontal" : "ellipsis-horizontal-outline"
              }
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
