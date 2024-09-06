import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { getScreenPercent } from "../utils/responsiveness";
import Colors from "../constants/colors";
import { CountryPicker } from "react-native-country-codes-picker";
import { useFonts } from "expo-font";
import GhanaFlag from "../../assets/svgs/icons/ghanaFlag.svg";
import CaretDown from "../../assets/svgs/icons/CaretDown.svg";

interface Props {
  label?: string;
  placeholder: string;
  type?: string;
}

const Input = ({ label, placeholder, type }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [flag, setFlag] = useState<string>("");

  const [fontsLoaded] = useFonts({
    Inter: require("../../assets/fonts/Inter-4.0/InterVariable.ttf"),
  });

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        {type === "number" && (
          <TouchableOpacity
            style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
            onPress={() => setShow(true)}
          >
            <GhanaFlag width={23} height={18} />
            <CaretDown width={16} height={16} />
          </TouchableOpacity>
        )}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={Colors.gray30}
          keyboardType={
            type === "email"
              ? "email-address"
              : type === "number"
              ? "numeric"
              : "default"
          }
        />
      </View>
      <CountryPicker
        show={show}
        lang="en"
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item) => {
          //   setCountryCode(item.dial_code);
          console.log(item.flag);

          setShow(false);
        }}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontFamily: "Inter",
    fontSize: getScreenPercent(12),
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 18,
    color: Colors.gray100,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: Colors.secondary,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Colors.gray20,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 8,
  },

  input: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "Inter",
    fontSize: getScreenPercent(14),
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 19.6,
    color: Colors.functionalText,
  },
});
