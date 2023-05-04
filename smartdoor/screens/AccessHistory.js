import * as React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

const ENDPOINT = "https://dhabackend.onrender.com";

async function getuser(id) {
  try {
    const response = await axios.get(ENDPOINT + "/user/" + id);
    return response.data;
  } catch (error) {
    console.error("getuser");
    throw error;
  }
}

const BlockInValid = ({ navigation, data }) => {
  const valid = false;
  const onPressButton = () => {
    return navigation.navigate("Details", { valid, data });
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
              <Text style={styles.caption1}>There is one invalid visitor.</Text>
              <Text style={[styles.subcaption1, styles.mt2]}>
                In {data.time}
              </Text>
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
const BlockValid = ({ navigation, data }) => {
  const valid = true;
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState(false)
  const onPressButton = () => {
    return navigation.navigate("Details", { valid, user, data });
  };

  useEffect(() => {
    async function fetchData() {
      if (data.userID) {
        const data1 = await getuser(data.userID);
        setUser(data1);
      } else {
        setAdmin(true)
      }
    }
    fetchData();
  }, []);

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
              {!admin && <Text style={styles.caption1}>{user.ten} is valid visitor.</Text>}
              {!admin || <Text style={styles.caption1}>One admin has opened the door</Text>}
              <Text style={[styles.subcaption1, styles.mt2]}>
                In {data.time}
              </Text>
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
async function getAllHistory() {
  try {
    const response = await axios.get(ENDPOINT + "/history");
    return response.data.historys;
  } catch (error) {
    console.error("getAllHistory");
    throw error;
  }
}
const AccessHistory = ({ navigation }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllHistory();
      setHistory(data);
    }
    fetchData();
  }, []);

  // Realtime update
  useEffect(() => {
    const interval = setInterval(async () => {
      const data = await getAllHistory();
      setHistory(data);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.accessHistory}>
      <ScrollView style={styles.body}>
        {history.map((historyitem, index) => {
          if (historyitem.open)
            return (
              <BlockValid
                navigation={navigation}
                data={historyitem}
                key={index}
              />
            );
          else
            return (
              <BlockInValid
                navigation={navigation}
                data={historyitem}
                key={index}
              />
            );
        })}
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
