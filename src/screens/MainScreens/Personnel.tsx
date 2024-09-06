import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { getScreenPercent } from "../../utils/responsiveness";
import PersonnelHeader from "../../components/Headers/PersonnelHeader";
import Colors from "../../constants/colors";
import Stepper from "../../components/Stepper";
import LockSvg from "../../../assets/svgs/lock.svg";
import DocumentCard from "../../components/Cards/DocumentCard";

const Personnel = () => {
  const docs = [
    {
      name: "Transaction summary",
      date: "27th Jan",
    },
    {
      name: "Registration summary",
      date: "27th Jan",
    },
    {
      name: "Generated Digital ID",
      date: "27th Jan",
    },
    {
      name: "Registration summary",
      date: "27th Jan",
    },
  ];
  return (
    <LinearGradient
      colors={["#E7F4EA", "#FFFFFF"]}
      // colors={['#E7F4EA', '#192f6a']}
      style={styles.container}
      locations={[0, 0.45]}
    >
      <SafeAreaView
        style={{ flex: 1, paddingHorizontal: getScreenPercent(16) }}
      >
        <PersonnelHeader />
        <View style={{ gap: 24, marginTop: 8 }}>
          <View
            style={{
              // width: "100%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
            }}
          >
            <LockSvg width={48} height={48} />
            <Text style={styles.title}>Pincodes not available</Text>
            <Text style={styles.subTitle}>
              Pincodes will be available from Aug 21 - Sept 3, 2024
            </Text>
          </View>
          <Stepper />
          <View style={{ gap: 16 }}>
            <Text
              style={{
                fontFamily: "Inter",
                fontWeight: "600",
                fontSize: getScreenPercent(18),
                lineHeight: 25.2,
                letterSpacing: -0.18,
                color: Colors.functionalText,
              }}
            >
              Your Documents
            </Text>
            <View style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "space-between",
            
            }}>
              {/* <FlatList
                data={docs}
                renderItem={({ item }) => {
                  return <DocumentCard name={item.name} date={item.date} />;
                }}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
              /> */}
              {docs.map((item, index) => <DocumentCard name={item.name} date={item.date} key={index} />)}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Personnel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: getScreenPercent(18),
    lineHeight: 25.2,
    letterSpacing: -0.18,
    color: Colors.functionalText,
    overflow: "hidden",
    textAlign: "center",
  },

  subTitle: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: getScreenPercent(14),
    lineHeight: 19.6,
    letterSpacing: -0.14,
    color: Colors.gray100,
    textAlign: "center",
  },
});
