import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "../../constants/colors";
import NssLogo from "../../../assets/svgs/nss-logo-1.svg";
import {
  getScreenHeight,
  getScreenPercent,
  getScreenWidth,
} from "../../utils/responsiveness";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { MotiView } from "moti";

interface Props {
  id: string;
  title: string;
  content: string;
  date: string;
  image?: string;
  isNew?: boolean;
}

const ArticleCard = ({ id, title, content, date, image, isNew }: Props) => {
  const { navigate } = useNavigation<any>();
  let duration = 100 + parseInt(id)
  return (
    <MotiView
    from={{
      opacity: 0,
      translateX: 100,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
      }}
      transition={{
        type: 'timing',
        duration: duration,
      }}
    >
    <Pressable
      style={styles.container}
      onPress={() =>
        navigate("ArticleDetails", {
          article: {
            id,
            title,
            content,
            date,
            image,
            isNew,
          },
        })
      }
    >
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
            <NssLogo
              width={getScreenPercent(16)}
              height={getScreenPercent(16)}
            />
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
              NSS
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
            {date}
          </Text>
        </View>
      </View>

      {/* MIDDLE CONATINER */}
      <View style={{ flexDirection: "row", gap: 8 }}>
        {image && <Image source={{ uri: image }} style={styles.image} />}
        <View
          style={{ flexDirection: "column", alignItems: "flex-start", gap: 4, flex: 1 }}
        >
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
          <Text
            style={{
              fontFamily: "Inter",
              fontSize: getScreenPercent(12),
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: 18,
              color: Colors.gray30,
            }}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {content}
          </Text>
        </View>
      </View>
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
      </Pressable>
      </MotiView>
  );
};

export default ArticleCard;

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
    paddingHorizontal: 4,
    paddingVertical: 2,
    backgroundColor: Colors.gray10,
    borderRadius: getScreenPercent(999),
  },

  image: {
    width: getScreenWidth(58),
    // height: getScreenHeight(80),
    borderRadius: 4,
  },
});
