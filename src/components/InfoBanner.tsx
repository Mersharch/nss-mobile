import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/colors";
import { getScreenPercent } from "../utils/responsiveness";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  content: string;
}

const InfoBanner = ({ content }: Props) => {
  return (
    <View style={styles.container}>
      <AntDesign name="exclamationcircle" size={24} color={Colors.primary} />
      <View style={styles.bannerRight}>
        <Text style={styles.bannerContent}>{content}</Text>
      </View>
    </View>
  );
};

export default InfoBanner;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    alignSelf: "stretch",
    backgroundColor: Colors.gray10,
    borderRadius: 8,
  },

  bannerRight: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  bannerTitle: {},

  bannerContent: {
    fontFamily: "Inter",
    fontSize: getScreenPercent(12),
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 18,
    color: Colors.subtleGray,
  },
});
