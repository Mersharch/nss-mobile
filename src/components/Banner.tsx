import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/colors";
import { getScreenPercent } from "../utils/responsiveness";
import { AntDesign } from "@expo/vector-icons";
import { MotiView } from "moti";

interface Props {
  state?: "Neutral" | "Error" | "Warning" | "Success" | "Info";
  icon?: boolean;
  title?: string;
  cta?: any;
  content: string;
}

const Banner = ({ state, icon, title, cta, content }: Props) => {
  return (
    <MotiView
      style={styles.container}
      from={{
        opacity: 0,
        translateX: -100,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
      }}
      exit={{
        opacity: 0,
        translateX: 100,
      }}
      exitTransition={{
        type: "timing",
        duration: 500,
      }}
    >
      {icon && (
        <AntDesign
          name="exclamationcircleo"
          size={24}
          color={
            state === "Error"
              ? Colors.red
              : state === "Warning"
              ? Colors.yellow
              : state === "Success"
              ? Colors.primarySuccess30
              : state === "Info"
              ? Colors.gray100
              : Colors.gray30
          }
        />
      )}
      <View style={styles.bannerRight}>
        {title && <Text style={styles.bannerTitle}>{title}</Text>}
        <Text style={styles.bannerContent}>{content}</Text>
      </View>
    </MotiView>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    alignSelf: "stretch",
    backgroundColor: Colors.negative10,
    borderRadius: 8,
  },

  bannerRight: {
    flex: 1,
  },

  bannerTitle: {},

  bannerContent: {
    fontFamily: "Inter",
    fontSize: getScreenPercent(12),
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 18,
    color: Colors.functionalText,
  },
});
