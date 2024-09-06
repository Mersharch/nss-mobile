import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { getScreenPercent } from "../../utils/responsiveness";
import { Avatar } from "react-native-paper";
import { Octicons } from "@expo/vector-icons";
import Colors from "../../constants/colors";

const PersonnelHeader = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Avatar.Image
          size={32}
          source={{
            uri: "https://plus.unsplash.com/premium_photo-1708110770188-3e4216b93119?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
          }}
        />
      </Pressable>
      <TouchableOpacity style={styles.notifBell}>
        <Octicons name="bell" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default PersonnelHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: getScreenPercent(20),
  },

  notifBell: {
    padding: 6,
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Colors.gray20,
    backgroundColor: Colors.secondary,
    width: 32,
    height: 32,
  },
});
