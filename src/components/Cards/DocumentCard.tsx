import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { getScreenHeight, getScreenPercent, getScreenWidth } from "../../utils/responsiveness";
import Colors from "../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  name: string;
  date: string;
}

const DocumentCard = ({ name, date }: Props) => {
  return (
    <LinearGradient
      colors={["#FFFFFF", "#E3E4E5"]}
      style={styles.container}
      locations={[0, 0.9]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <AntDesign name="file1" size={24} color="black" />
      <View style={{ gap: 4 }}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{date}</Text>
      </View>
    </LinearGradient>
  );
};

export default DocumentCard;

const styles = StyleSheet.create({
  container: {
    width: getScreenWidth(170),
    borderWidth: 1,
    borderRadius: 8,
    gap: 16,
    padding: 12,
    borderColor: Colors.gray20,
    opacity: 0.35
  },

  title: {
    fontWeight: '600',
    fontSize: getScreenPercent(14),
    lineHeight: 19.6,
    color: Colors.functionalText
  },

  subTitle: {
    fontWeight:'400',
    fontSize: getScreenPercent(12),
    lineHeight: 18,
    color: Colors.gray100
  }
});
