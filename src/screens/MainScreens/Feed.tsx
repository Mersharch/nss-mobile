import {
  FlatList,
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
import { Octicons } from "@expo/vector-icons";
import Colors from "../../constants/colors";
import { getScreenHeight, getScreenPercent } from "../../utils/responsiveness";
import { Entypo } from "@expo/vector-icons";
import ArticleCard from "../../components/Cards/ArticleCard";
import { BottomSheet, BottomSheetRef } from "react-native-sheet";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>("Latest");

  const bottomSheet = useRef<BottomSheetRef>(null);

  const categories = ["Announcements", "Events", "Advice"];

  return (
    <SafeAreaProvider>
      {/* APP HEADER */}
      <AppHeader
        title="Feed"
        right={
          <TouchableOpacity>
            <Octicons name="bell" size={24} color="black" />
          </TouchableOpacity>
        }
      />

      {/* REST OF CONTENT */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {/* CATEGORIES FLATLIST */}
        <View>
          <FlatList
            horizontal
            data={categories}
            keyExtractor={(item) => `${item}1`}
            renderItem={({ item, index }: any) => (
              <Pressable
                style={
                  index === selectedCategory
                    ? styles.categorySelected
                    : styles.category
                }
                onPress={() => setSelectedCategory(index)}
              >
                <Text
                  style={
                    index === selectedCategory
                      ? styles.categorySelectedText
                      : styles.categoryText
                  }
                >
                  {item}
                </Text>
              </Pressable>
            )}
          />
        </View>

        {/* SORT BY SELECT */}
        <View
          style={{
            flexDirection: "row",
            gap: 3,
            alignSelf: "flex-end",
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

        {/* ARTICLE FEED */}
        <View style={{ gap: 8 }}>
          <ArticleCard
            isNew
            date={"21st April, 2024"}
            id={"200"}
            image={
              "https://imgs.search.brave.com/xZNHR6craorFOJNLCFOjxOL4bnBLOq09kNuoENLnNv4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzRhL0luZGVwZW5k/ZW5jZV9BcmNoXy1f/QWNjcmEsX0doYW5h/MS5qcGc"
            }
            title={
              "All personnel are to visit their regional offices before 29th March"
            }
            content={
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum repudiandae sed nulla natus vero repellat, velit corrupti id. Libero, ipsam doloremque totam nisi quasi velit minima, quia veniam quidem tenetur perspiciatis tempore deserunt? Debitis saepe, veniam fuga earum cupiditate quo sunt quaerat et laudantium perferendis eveniet modi tenetur esse a amet, excepturi officiis dolore quia expedita id nesciunt? Voluptates optio natus reiciendis, est tenetur laboriosam adipisci repellendus beatae modi exercitationem quae rem ea voluptate mollitia veritatis animi in illo velit. Blanditiis libero enim praesentium doloremque distinctio nobis minus placeat, explicabo fugit ipsum accusantium deserunt amet tempora minima cum eligendi itaque culpa nesciunt perferendis vel soluta corrupti vitae. Sunt iure iusto culpa soluta alias, ipsam sint adipisci, eos rerum dolore esse sit ducimus ullam. Dolores adipisci expedita animi cumque dolor odio praesentium voluptatum explicabo quibusdam accusamus saepe asperiores fugit consectetur enim est minima, molestias dolorem laboriosam fuga illum omnis! Dolores, modi!"
            }
          />
          <ArticleCard
            date={"21st April, 2024"}
            id={"400"}
            image={
              "https://imgs.search.brave.com/xZNHR6craorFOJNLCFOjxOL4bnBLOq09kNuoENLnNv4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzRhL0luZGVwZW5k/ZW5jZV9BcmNoXy1f/QWNjcmEsX0doYW5h/MS5qcGc"
            }
            title={
              "All personnel are to visit their regional offices before 29th March"
            }
            content={
              "President Nana Addo Dankwa Akufo-Addo has ushered in a new era for the Nation mahsgah ajhvda adhvkahv akhdv aihvda adkhv havd"
            }
          />
          <ArticleCard
            date={"21st April, 2024"}
            id={"600"}
            image={
              "https://imgs.search.brave.com/xZNHR6craorFOJNLCFOjxOL4bnBLOq09kNuoENLnNv4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzRhL0luZGVwZW5k/ZW5jZV9BcmNoXy1f/QWNjcmEsX0doYW5h/MS5qcGc"
            }
            title={
              "All personnel are to visit their regional offices before 29th March"
            }
            content={
              "President Nana Addo Dankwa Akufo-Addo has ushered in a new era for the Nation mahsgah ajhvda adhvkahv akhdv aihvda adkhv havd"
            }
          />
          <ArticleCard
            date={"21st April, 2024"}
            id={"800"}
            title={
              "All personnel are to visit their regional offices before 29th March"
            }
            content={
              "President Nana Addo Dankwa Akufo-Addo has ushered in a new era for the Nation mahsgah ajhvda adhvkahv akhdv aihvda adkhv havd"
            }
          />
        </View>
      </ScrollView>
      <View>
        <BottomSheet height={getScreenHeight(200)} ref={bottomSheet}>
          <Text
            style={{
              fontSize: getScreenPercent(14),
              fontWeight: "600",
              lineHeight: 19.6,
              letterSpacing: -0.14,
              color: "#001927",
              marginLeft: 20,
              marginTop: 20,
            }}
          >
            Sort Announcemnets
          </Text>
          <Pressable
            onPress={() => {
              setSortBy("Latest");
              bottomSheet.current?.hide();
            }}
          >
            <Text
              style={{
                fontFamily: "Inter",
                fontSize: getScreenPercent(12),
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: 18,
                color: "#001927",
                marginLeft: 20,
                marginTop: 24,
              }}
            >
              Latest
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSortBy("Oldest");
              bottomSheet.current?.hide();
            }}
          >
            <Text
              style={{
                fontFamily: "Inter",
                fontSize: getScreenPercent(12),
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: 18,
                color: "#001927",
                marginLeft: 20,
                marginTop: 24,
                marginBottom: 20,
              }}
            >
              Oldest
            </Text>
          </Pressable>
        </BottomSheet>
      </View>
    </SafeAreaProvider>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    marginTop: 20,
    gap: 8,
  },

  category: {
    flexDirection: "row",
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Colors.gray20,
    backgroundColor: Colors.secondary,
    shadowColor: "rgba(7, 137, 59, 0.20)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    marginRight: 8,
  },

  categorySelected: {
    flexDirection: "row",
    paddingVertical: 6,
    paddingHorizontal: 12,
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
  },

  categoryText: {
    color: Colors.gray30,
    fontSize: getScreenPercent(12),
    fontFamily: "Inter",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 18,
    textAlign: "center",
  },

  categorySelectedText: {
    color: Colors.secondary,
    fontSize: getScreenPercent(12),
    fontFamily: "Inter",
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 18,
    textAlign: "center",
  },
});
