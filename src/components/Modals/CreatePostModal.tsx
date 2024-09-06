import {
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import SafeAreaProvider from "../SafeAreaProvider";
import AppHeader from "../Headers/AppHeader";
import { Button } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import LogoSvg from "../../../assets/svgs/nss-logo-1.svg";
import { getScreenPercent } from "../../utils/responsiveness";
import Colors from "../../constants/colors";

interface Props {
  onSubmit: () => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Post {
  title: string;
  comment: string;
}

const CreatePostModal = ({ onSubmit, setShowModal }: Props) => {
  const [post, setPost] = useState<Post>({ title: "", comment: "" });
  return (
    <Modal animationType="slide" presentationStyle="pageSheet">
      <SafeAreaProvider>
        <AppHeader
          left={
            <Pressable onPress={() => setShowModal(false)}>
              <AntDesign name="close" size={24} color="black" />
            </Pressable>
          }
          right={
            <Button mode="contained" disabled={!post.comment && !post.title}>
              Post
            </Button>
          }
        />

        {/* CONTENT */}
        <View style={{ gap: 8, marginTop: 32 }}>
          <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
            <LogoSvg width={16} height={16} />
            <Text style={styles.subTitle}>Share a post with the NSS forum</Text>
          </View>

          <View style={{ gap: 24 }}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter a title"
              placeholderTextColor={Colors.gray20}
              multiline
              onChangeText={(v: string) =>
                setPost((prev: Post) => ({ ...prev, title: v }))
              }
            />

            <View>
              <Text style={styles.subTitle}>Select a Topic</Text>
              <View></View>
            </View>

            <View style={{ gap: 8 }}>
              <Text style={styles.subTitle}>{post.comment?.length}/160</Text>
              <TextInput
                style={styles.textArea}
                placeholder="Enter your comment this should be less than 160 characters"
                placeholderTextColor={Colors.gray30}
                maxLength={160}
                multiline
                onChangeText={(v: string) =>
                  setPost((prev: Post) => ({ ...prev, comment: v }))
                }
              />
            </View>
          </View>
        </View>
      </SafeAreaProvider>
    </Modal>
  );
};

export default CreatePostModal;

const styles = StyleSheet.create({
  subTitle: {
    fontWeight: "400",
    fontSize: getScreenPercent(12),
        lineHeight: 18,
    color: Colors.gray30
  },

  textInput: {
    fontSize: getScreenPercent(24),
    fontWeight: "700",
    lineHeight: 33.6,
    color: Colors.functionalText,
  },

  textArea: {
    fontSize: getScreenPercent(14),
    fontWeight: "400",
    lineHeight: 19.6,
    color: Colors.gray100,
  },
});
