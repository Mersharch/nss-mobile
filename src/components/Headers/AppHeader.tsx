import { Pressable, StyleSheet, View, Text } from "react-native";
import React, { JSX } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { getScreenPercent, getScreenWidth } from "../../utils/responsiveness";
import Back from "../../../assets/svgs/icons/backButton.svg";
import LogoSvg from "../../../assets/svgs/nss-logo-1.svg";
import { useNavigation } from "@react-navigation/native";

interface Props {
  title?: string;
  back?: boolean;
  left?: JSX.Element;
  right?: JSX.Element;
}

const AppHeader = ({ title, back, right, left }: Props) => {
  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        {back ? (
          <Pressable onPress={() => goBack()}>
            <Back width={24} height={24} />
          </Pressable>
        ) : left ? (
          <View>{left}</View>
        ) : (
          <LogoSvg width={48} height={32} />
        )}
        {back && <Text style={styles.headerBackText}>Back</Text>}
        {title && <Text style={styles.headerTitle}>{title}</Text>}
      </View>
      {right && <View>{right}</View>}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: getScreenPercent(20),
  },

  headerLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  headerTitle: {
    fontWeight: "600",
    fontSize: getScreenPercent(16),
    lineHeight: 24,
    letterSpacing: -0.16,
  },

  headerBackText: {
    fontWeight: "600",
    fontSize: getScreenPercent(14),
    lineHeight: 19.6,
    letterSpacing: -0.14,
  },
});
