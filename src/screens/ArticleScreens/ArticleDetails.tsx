import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import SafeAreaProvider from "../../components/SafeAreaProvider";
import AppHeader from "../../components/Headers/AppHeader";
import { Octicons } from "@expo/vector-icons";
import Colors from "../../constants/colors";
import {
  getScreenHeight,
  getScreenPercent,
  getScreenWidth,
} from "../../utils/responsiveness";
import NssLogo from "../../../assets/svgs/nss-logo-1.svg";
import { FAB } from "react-native-paper";
// import Share from "react-native-share";
import { Share } from "react-native";

const ArticleDetails = ({ route, navigation }: any) => {
  const { article } = route.params;

  const url =
    "https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_IN&gl=US";
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Instagram | A time wasting application" + "\n" + url,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaProvider>
      {/* APP HEADER */}
      <AppHeader
        back
        right={
          <TouchableOpacity>
            <Octicons name="bell" size={24} color="black" />
          </TouchableOpacity>
        }
      />

      {/* SCREEN CONTENT */}
      <ScrollView
        style={{ marginTop: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {/* TOP CONATINER */}
        <View style={{ gap: 8, marginBottom: 16 }}>
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
            {article?.date}
          </Text>

          {/*  */}
          <Text
            style={{
              fontFamily: "Inter",
              fontSize: getScreenPercent(20),
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: 28,
              letterSpacing: -0.2,
              color: Colors.functionalText,
            }}
          >
            {article?.title}
          </Text>
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
        </View>

        {/* ARTICLE IMAGE */}
        {article?.image && (
          <Image
            source={{ uri: article?.image }}
            style={{
              width: getScreenWidth(358),
              height: getScreenHeight(231),
              borderRadius: 4,
              marginBottom: 16,
            }}
          />
        )}

        {/* ARTICLE CONTENT */}
        {/* ARTICLE CONTENT */}
        {article?.content
          .split(" ")
          .reduce((result, word, index) => {
            const chunkIndex = Math.floor(index / 15); // Adjust this number to change the approximate number of words per line

            if (!result[chunkIndex]) {
              result[chunkIndex] = "";
            }

            result[chunkIndex] += `${word} `;

            return result;
          }, [])
          .map((paragraph, index) => (
            <Text
              key={index}
              style={{
                fontFamily: "Inter",
                fontSize: getScreenPercent(12),
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: 18,
                color: Colors.gray30,
                marginBottom: 10, // Add some bottom margin for paragraph spacing
              }}
              numberOfLines={4}
            >
              {paragraph}
            </Text>
          ))}
      </ScrollView>
      <FAB
        icon="share-variant"
        style={styles.fab}
        onPress={onShare}
        color={Colors.secondary}
      />
    </SafeAreaProvider>
  );
};

export default ArticleDetails;

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 8,
    right: 0,
    bottom: 40,
    backgroundColor: Colors.primary,
    borderRadius: 50,
  },
});
