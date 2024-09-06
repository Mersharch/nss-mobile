import { StyleSheet, Text, Pressable, View } from "react-native";
import React from "react";
import Colors from "../constants/colors";
import EmailIcon from "../../assets/svgs/icons/emailIcon.svg";
import PhoneIcon from "../../assets/svgs/icons/phoneIcon.svg";

interface Props {
  type: "email" | "phone";
  content: string;
  checked?: boolean;
  setChannel: React.Dispatch<React.SetStateAction<"email" | "phone">>;
}

const OtpSelect = ({ type, content, checked, setChannel }: Props) => {
  return (
    <Pressable
      style={[styles.container, checked && styles.containerChecked]}
      onPress={() => setChannel(type)}
    >
      {type === "email" ? <EmailIcon /> : <PhoneIcon />}
      <View style={styles.rightContainer}>
        <Text style={styles.title}>
          {type === "email" ? "Email" : "Phone number"}
        </Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    </Pressable>
  );
};

export default OtpSelect;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
    gap: 12,
    alignSelf: "stretch",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Colors.primarySuccess30,
    borderRadius: 8,
    backgroundColor: Colors.secondary,
  },

  containerChecked: {
    backgroundColor: Colors.primarySuccess10,
  },

  rightContainer: {},

  title: {},

  content: {},
});
