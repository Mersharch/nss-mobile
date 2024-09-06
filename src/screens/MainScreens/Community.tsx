import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import SafeAreaProvider from "../../components/SafeAreaProvider";
import AppHeader from "../../components/Headers/AppHeader";
import { Entypo, Octicons } from "@expo/vector-icons";
import Colors from "../../constants/colors";
import { getScreenPercent } from "../../utils/responsiveness";
import { BottomSheetRef } from "react-native-sheet";
import CommunityPost from "../../components/Cards/CommunityPost";
import { FAB } from "react-native-paper";
import CreatePostModal from "../../components/Modals/CreatePostModal";

const Community = () => {
  const [sortBy, setSortBy] = useState<string>("Trending");
  const [topic, setTopic] = useState<string>("All");
  const [showModal, setShowModal] = useState<boolean>(false);

  const bottomSheet = useRef<BottomSheetRef>(null);
  const bottomSheet2 = useRef<BottomSheetRef>(null);

  const createNewPost = () => {};

  return (
    <SafeAreaProvider>
      {/* APP HEADER */}
      <AppHeader
        title="Community"
        right={
          <TouchableOpacity>
            <Octicons name="bell" size={24} color="black" />
          </TouchableOpacity>
        }
      />

      {/* REST OF CONTENT */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {/* SORT  */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          {/* SOME SORT */}
          <View
            style={{
              flexDirection: "row",
              gap: 3,
              marginTop: 8,
            }}
          >
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
              Sort:
            </Text>
            <Pressable
              style={{ flexDirection: "row", gap: 2, alignItems: "center" }}
              onPress={() => bottomSheet.current?.show()}
            >
              <Text
                style={{
                  fontFamily: "Inter",
                  fontSize: getScreenPercent(12),
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: 18,
                  color: Colors.functionalText,
                }}
              >
                {sortBy}
              </Text>
              <Entypo
                name="chevron-down"
                size={16}
                color={Colors.functionalText}
              />
            </Pressable>
          </View>

          {/* TOPIC SORT */}
          <View
            style={{
              flexDirection: "row",
              gap: 3,
              marginTop: 8,
            }}
          >
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
              Topic:
            </Text>
            <Pressable
              style={{ flexDirection: "row", gap: 2, alignItems: "center" }}
              onPress={() => bottomSheet2.current?.show()}
            >
              <Text
                style={{
                  fontFamily: "Inter",
                  fontSize: getScreenPercent(12),
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: 18,
                  color: Colors.functionalText,
                }}
              >
                {topic}
              </Text>
              <Entypo
                name="chevron-down"
                size={16}
                color={Colors.functionalText}
              />
            </Pressable>
          </View>
        </View>

        {/* ARTICLE FEED */}
        <View style={{ gap: 8 }}>
          <CommunityPost
            title="Hows everyone feeling about the new NSS app? Love or hate?"
            id="2"
            isNew
          />
          <CommunityPost
            title="Hows everyone feeling about the new NSS app? Love or hate?"
            id="2"
          />
          <CommunityPost
            title="Hows everyone feeling about the new NSS app? Love or hate?"
            id="2"
          />
          <CommunityPost
            title="Hows everyone feeling about the new NSS app? Love or hate?"
            id="2"
          />
        </View>
      </ScrollView>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => setShowModal(true)}
        color={Colors.secondary}
        label="New Post"
      />

      {showModal && <CreatePostModal onSubmit={createNewPost} setShowModal={setShowModal} />}
    </SafeAreaProvider>
  );
};

export default Community;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    marginTop: 20,
    gap: 8,
  },

  fab: {
    position: "absolute",
    margin: 8,
    right: 0,
    bottom: 40,
    backgroundColor: Colors.primary,
    borderRadius: 50,
  },
});
