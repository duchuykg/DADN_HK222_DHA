import * as React from "react";
import { useState } from "react";
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity} from "react-native";


const DetailUser = ({navigation }) => {
  const handleEditPress = () => {
    return navigation.navigate("Edit");
  };
  
  return (
    <>
        <View style={styles.container}>
          <ScrollView style={styles.scrollViewContent}>
            <Text style={styles.text}>AmandaDoe</Text>
            <View style={styles.imageview}>
              <Image
                source={require("../assets/Avatar4.png")}
                style={styles.image1}
                resizeMode="contain"
              />
            </View>
            <View style={styles.detailview}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 5,
                  backgroundColor: "#fff",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    padding: 5,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 20,
                      paddingHorizontal: 10,
                    }}
                  >
                    Name
                  </Text>
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                  <Text style={{ color: "gray", paddingHorizontal: 10 }}>
                    Amanda Doe
                  </Text>
                </View>
              </View>
              
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 5,
                  backgroundColor: "#fff",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    padding: 5,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 20,
                      paddingHorizontal: 10,
                    }}
                  >
                    Acess Permissions
                  </Text>
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                  <Text style={{ color: "gray", paddingHorizontal: 10 }}>
                    Door 1, Door 2
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 5,
                  backgroundColor: "#fff",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    padding: 5,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 20,
                      paddingHorizontal: 10,
                    }}
                  >
                    Note
                  </Text>
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                  <Text style={{ color: "gray", paddingHorizontal: 10 }}>
                    amanda@gmail.com
                  </Text>
                </View>
              </View>

              {/* Button */}
              </View>
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.editButton]} onPress={handleEditPress}>
                <View>
                  <View style={{
                      flexDirection: "row",
                      padding: 5,
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/pen.png")}
                      style={styles.checkicon}
                    />
                    <Text style={styles.buttonTextB}> Edit </Text>
                  </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button1, styles.deleteButton]}>
                <View>
                  <View style={{
                      flexDirection: "row",
                      padding: 5,
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/trash.png")}
                      style={styles.checkicon1}
                    />
                    <Text style={styles.buttonText}> Delete </Text>
                  </View>
                  </View>
                </TouchableOpacity>
              </View>

          </ScrollView>

        </View>
      
    </>
  );
};

const styles = StyleSheet.create({
  checkicon: {
    width: 26,
    height: 26,
  },
  checkicon1: {
    width: 23,
    height: 23,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  detailview: {
    width: 350,
    backgroundColor: "#fff",
    alignSelf: "center",
    padding: 6,
    margin: 25,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image1: {
    width: 200,
    height: 200,
    borderRadius: 32,
    alignItems: "center",
  },
  imageview: {
    alignItems: "center",
  },
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  text: {
    paddingVertical: 10,
    paddingLeft: 20,
    fontSize: 30,
    textAlign: "left",
    fontWeight: 'bold',
  },
  intext: {
    paddingVertical: 10,
    color: "red",
    fontSize: 30,
    textAlign: "center",
    paddingBottom: 20,
  },
  user: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  email: {
    fontSize: 18,
    color: "#666",
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 31,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '35%',
      borderRadius: 15, 

  },
  button1: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 31,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '35%',
    borderRadius: 15, 

  },
  editButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#007AFF',
    borderWidth: 2,

  },
  deleteButton: {
    backgroundColor: '#FFFFFF',
    borderColor: 'gray',
    borderWidth: 2,
  },
  buttonTextB: {
    color: '#007AFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },

});

export default DetailUser;
