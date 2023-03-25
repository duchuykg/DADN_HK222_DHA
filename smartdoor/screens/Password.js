import * as React from "react";
import { useState } from "react";
import { ImageBackground } from "react-native";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

const Password = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    // Check if the username and password are valid

    return navigation.navigate('Login')
    // if (username === "admin" && password === "password") {
    //     return navigation.navigate('Main')
    // } else {
    //   Alert.alert("Invalid credentials", "Please enter valid username and password");
    // }
  };

  return (
    <>
    <ImageBackground style={styles.container} source={require("../assets/bg.png")}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image style={styles.logo} source={require("../assets/logo1.png")} />

            
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>

       

        <View style={styles.form2}>
          <TouchableOpacity style={styles.button} onPress={handleReset}>
            <Text style={styles.buttonText}>Reset PassWord</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
  flexGrow: 1,
  justifyContent: "center", // can giua theo truc y
  alignItems: "center", // can giua theo truc x
  padding: 20,
},
    container: {
        flex: 1,
    },

  logo: {
    width: 260,
    height: 50,
    resizeMode: "contain",
    position: "absolute",
    top: 60,
    marginBottom: 30,
  },
  form: {
    width: "100%",
    maxWidth: 300,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  form1: {
    top: 40,
    width: "100%",
    maxWidth: 300,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  form2: {
    top: 120,
    width: "100%",
    
    borderRadius: 20,
  },

  input: {
    width: "100%",
    maxWidth: 300,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#F8D247",
    borderRadius: 30,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  textlogin: {
    color: 'white',
    fontSize: 40,
    fontWeight: "bold",
    bottom: 60,
  },
});

export default Password;
