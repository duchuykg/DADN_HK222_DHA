import * as React from "react";
import { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
const BlockInValid = ({navigation}) => {
  const valid = false
  const onPressButton = () => {
    return navigation.navigate('Details', {valid})
  };
  
  return (
    <>
      <View style={styles.groupContainer}>
        <View style={styles.listConfirmGroup}>
          <View style={styles.listConfirm1}>
            <Image
              style={styles.iconL1}
              resizeMode="cover"
              source={require("../assets/icon-l1.png")}
            />
            <View style={[styles.masterList1, styles.ml12]}>
              <Text style={styles.caption1}>Amanda is valid visitor.</Text>
              <Text style={[styles.subcaption1, styles.mt2]}>In 10:10 PM</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.listConfirm2} onPress={onPressButton}>
            <Image
              style={styles.iconL1}
              resizeMode="cover"
              source={require("../assets/group-9.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const BlockValid = ({navigation }) => {
  const valid = true
  const onPressButton = () => {
    return navigation.navigate('Details', {valid})
  };
  
  return (
    <>
      <View style={styles.groupContainer}>
        <View style={styles.listConfirmGroup}>
          <View style={styles.listConfirm1}>
            <Image
              style={styles.iconL1}
              resizeMode="cover"
              source={require("../assets/icon-l.png")}
            />
            <View style={[styles.masterList1, styles.ml12]}>
              <Text style={styles.caption1}>Amanda is valid visitor.</Text>
              <Text style={[styles.subcaption1, styles.mt2]}>In 10:10 PM</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.listConfirm2} onPress={onPressButton}>
            <Image
              style={styles.iconL1}
              resizeMode="cover"
              source={require("../assets/group-9.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const AccessHistory = ({navigation}) => {
  return (
    <View style={styles.accessHistory}>
      <ScrollView style={styles.body}>
        <BlockValid navigation={navigation}/>
        <BlockInValid navigation={navigation}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ml12: {
    marginLeft: 16,
  },
  body: {
    paddingTop: 20,
  },
  caption1: {
    fontSize: 16,
    letterSpacing: 0.3,
    lineHeight: 24,
    color: "#000",
    textAlign: "left",
  },
  subcaption1: {
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    color: "#155d18",
    textAlign: "left",
  },
  accessHistory: {
    backgroundColor: "#fff",
    width: "100%",
  },
  ibmPlexHeadline4: {
    paddingTop: 70,
    paddingLeft: 16,
    width: "100%",
  },
  manropeHeadline: {
    width: "100%",
    top: "0%",
    left: "0%",
    fontSize: 34,
    lineHeight: 44,
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
  },
  groupContainer: {
    paddingLeft: 24,
    width: "100%",
  },
  listConfirmGroup: {
    width: "100%",
    paddingTop: 70,
    paddingRight: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  listConfirm2: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  listConfirm1: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconL1: {
    position: "relative",
    width: 40,
    height: 40,
  },
  masterList1: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default AccessHistory;
