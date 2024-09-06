import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef } from "react";
import Colors from "../constants/colors";
import { getScreenHeight, getScreenPercent } from "../utils/responsiveness";
import { AntDesign } from "@expo/vector-icons";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { BottomSheet, BottomSheetRef } from "react-native-sheet";

const Stepper = () => {
  const bottomSheet = useRef<BottomSheetRef>(null);
  let circularProgress: AnimatedCircularProgress | null;

  useEffect(() => {
    circularProgress?.animate(Math.floor((1 / 7) * 100), 3500);
  }, []);
  return (
    <>
      <Pressable
        style={styles.container}
        onPress={() => bottomSheet?.current?.show()}
      >
        <AnimatedCircularProgress
          size={60}
          width={8}
          fill={Math.floor((1 / 7) * 100)}
          tintColor={Colors.warning100}
          backgroundColor={Colors.secondary}
          rotation={0}
          ref={(ref) => (circularProgress = ref)}
        >
          {(fill) => <Text>1/7</Text>}
        </AnimatedCircularProgress>
        <View style={styles.middle}>
          <Text style={styles.subTitle}>Next step</Text>
          <Text style={styles.title}>Check and Pay for PIN Code</Text>
          <TouchableOpacity>
            <Text style={styles.subTitle}>Tap to see remaining steps</Text>
          </TouchableOpacity>
        </View>
        <AntDesign name="down" size={16} color="black" />
      </Pressable>

      <View>
        <BottomSheet
          height={getScreenHeight(800)}
          ref={bottomSheet}
          contentContainerStyle={{ marginHorizontal: 16 }}
        >
          <View
            style={{
              flexDirection: "row",
              padding: 12,
              alignItems: "center",
              gap: 12,
              marginTop: 16,
              marginBottom: 8,
            }}
          >
            <Text style={{ flex: 1, textAlign: "center" }}>
              NSS Registration Procedure
            </Text>
            <Pressable onPress={() => bottomSheet?.current?.hide()}>
              <AntDesign name="close" size={24} color="black" />
            </Pressable>
          </View>
          <View style={styles.container}>
            <AnimatedCircularProgress
              size={60}
              width={8}
              fill={Math.floor((1 / 7) * 100)}
              tintColor={Colors.warning100}
              backgroundColor={Colors.secondary}
              rotation={0}
              ref={(ref) => (circularProgress = ref)}
            >
              {(fill) => <Text>1/7</Text>}
            </AnimatedCircularProgress>
            <View style={styles.middle}>
              <Text style={styles.subTitle}>Next step</Text>
              <Text style={styles.title}>Check and Pay for PIN Code</Text>
            </View>
          </View>
          <Text style={{ marginTop: 16 }}>All steps required</Text>
        </BottomSheet>
      </View>
    </>
  );
};

export default Stepper;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
    gap: 12,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
    borderColor: Colors.secondary,
    backgroundColor: Colors.warning10,
  },

  middle: {
    flexDirection: "column",
    alignItems: "flex-start",
    flex: 1,
  },

  title: {
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: getScreenPercent(14),
    lineHeight: 19.6,
    letterSpacing: -0.14,
    color: Colors.functionalText,
  },

  subTitle: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: getScreenPercent(12),
    lineHeight: 18,
    color: Colors.gray100,
  },
});
