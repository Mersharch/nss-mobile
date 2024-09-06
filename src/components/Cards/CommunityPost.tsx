import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../constants/colors";
import NssLogo from "../../../assets/svgs/nss-logo-1.svg";
import {
  getScreenHeight,
  getScreenPercent,
  getScreenWidth,
} from "../../utils/responsiveness";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

interface Props {
  id: string;
  title: string;
  isNew?: boolean;
}

const CommunityPost = ({ id, title, isNew }: Props) => {
  const { navigate } = useNavigation<any>();
  const [action, setAction] = useState<string>("");
  return (
    <Pressable style={styles.container}>
      {/* TOP ROW */}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Avatar.Text size={16} label="XD" />
            <Text
              style={{
                fontFamily: "Inter",
                fontSize: getScreenPercent(12),
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: 18,
                color: Colors.gray30,
              }}
            >
              John Boadu
            </Text>
          </View>
          {isNew && (
            <View style={styles.newBadgeContainer}>
              <AntDesign name="star" size={12} color={Colors.casablanca} />
              <Text
                style={{
                  fontFamily: "Inter",
                  fontSize: getScreenPercent(10),
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: 15,
                  color: Colors.casablanca,
                  textTransform: "uppercase",
                }}
              >
                New
              </Text>
            </View>
          )}
        </View>
        <View style={styles.dateBadgeContainer}>
          <Text
            style={{
              fontFamily: "Inter",
              fontSize: getScreenPercent(10),
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: 15,
              color: Colors.gray100,
            }}
          >
            7H ago
          </Text>
        </View>
      </View>

      {/* MIDDLE CONATINER */}
      <View style={{ gap: 12 }}>
        <Text
          style={{
            fontFamily: "Inter",
            fontSize: getScreenPercent(14),
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: 19.6,
            letterSpacing: -0.14,
            color: Colors.functionalText,
          }}
        >
          {title}
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: "Inter",
              fontSize: getScreenPercent(12),
              color: Colors.primary,
              lineHeight: 18,
              fontWeight: "600",
            }}
          >
            Read more
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", gap: 6 }}>
        <Pressable style={styles.actionSelected}>
          <Octicons name="thumbsup" size={12} color="white" />
          <Text style={styles.actionSelectedText}>234</Text>
        </Pressable>

        <Pressable style={styles.action}>
          <Octicons name="thumbsdown" size={12} color="black" />
          <Text style={styles.actionText}>234</Text>
        </Pressable>

        <Pressable style={styles.action}>
          <Octicons name="comment-discussion" size={12} color="black" />
          <Text style={styles.actionText}>234</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

export default CommunityPost;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingVertical: 12,
    gap: 12,
    alignItems: "flex-start",
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: Colors.gray10,
    backgroundColor: Colors.secondary,
  },

  newBadgeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    paddingHorizontal: 4,
    paddingVertical: 2,
    backgroundColor: Colors.warning10,
    borderRadius: getScreenPercent(999),
  },

  dateBadgeContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: Colors.gray10,
    borderRadius: getScreenPercent(999),
  },

  action: {
    flexDirection: "row",
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Colors.gray20,
    backgroundColor: Colors.gray10,
    shadowColor: "rgba(7, 137, 59, 0.20)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    marginRight: 8,
    gap: 6,
  },

  actionSelected: {
    flexDirection: "row",
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Colors.gray20,
    backgroundColor: Colors.primary,
    shadowColor: "rgba(7, 137, 59, 0.20)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    marginRight: 8,
    gap: 6,
  },

  actionText: {
    color: Colors.gray30,
    fontSize: getScreenPercent(12),
    fontFamily: "Inter",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 18,
    textAlign: "center",
  },

  actionSelectedText: {
    color: Colors.secondary,
    fontSize: getScreenPercent(12),
    fontFamily: "Inter",
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 18,
    textAlign: "center",
  },
});
