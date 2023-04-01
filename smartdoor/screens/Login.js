import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ImageBackground } from "react-native";
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Alert} from "react-native";

async function getAllAdmin() {
  try {
    const response = await axios.get("https://dhabackend.onrender.com/user" );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const Login = ({ navigation }) => {
  const [taiKhoan, setUsername] = useState("");
  const [matKhau, setPassword] = useState("");
  useEffect(() => {
    async function fetchData() {
      
      const data = await getAllAdmin();
    }
    fetchData();
  }, []);

  const handleLogin = () => {
    // let request = {
    //   taiKhoan,
    //   matKhau,
    // };
    // axios.post("https://dhabackend.onrender.com/admin/login", request).then((respond) => {
      
    //   if (respond.data.admin) {
    //     localStorage.setItem('admin', respond.data.admin)
    //     return navigation.navigate('Main');
    //   } else {
    //     Alert.alert('Tài khoản thử nghiệm: Tên đăng nhập: 1');
    //   }
    // });
    return navigation.navigate('Main');
    // let loginSuccess = false;
    // login.map((adminitem) => {
    //   if (username === adminitem.taiKhoan && password === adminitem.password) {
    //     loginSuccess = true;
    //     return navigation.navigate('Main');
    //   } 
    // });
    // if (!loginSuccess) {
    //   return navigation.navigate('Main');
    // } 
    // else {
    //   Alert.alert('Tài khoản thử nghiệm: Tên đăng nhập: 1');
    // }
  };
    
  const handleForgot = () => {
    return navigation.navigate('Password')
  };
  const handleHelp = () => {
    return navigation.navigate('Password')
  };
  const handleContact = () => {
    return navigation.navigate('Password')
  };
  const handleAboutUs = () => {
    return navigation.navigate('Password')
  };

  return (
    <>
    <ImageBackground style={styles.container} source={require("../assets/bg.png")}>
      <ScrollView contentContainerStyle={styles.container1}>

        <View style={styles.formlogo}>          
          <Image style={styles.logo} source={require("../assets/logo1.png")} />
        </View>

        <View style={styles.content1}>
          <Text style={styles.textlogin}>Login</Text>

        

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Tên đăng nhập"
              onChangeText={(text) => setUsername(text)}
            />
          </View>

          <View style={styles.form1}>
          <TextInput
              style={styles.input}
              placeholder="Mật khẩu"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity onPress={handleForgot}>
              <View>
                <Text style={[styles.caption2 ]}>Forgot PassWord</Text>
              </View>
            </TouchableOpacity>    
          </View>
        </View>

        <View style={styles.content1}>
          <View style={styles.form2}>
            
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>    
        </View>    

        <View style={styles.content}>
          <View style={styles.form3}>
            <TouchableOpacity onPress={handleHelp} style={styles.helpcontact}>
              <View>
                <Text style={[styles.caption3 ]}>Help</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleContact} style={styles.helpcontact}>
              <View>
                <Text style={[styles.caption3 ]}>Contact</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAboutUs} style={styles.helpcontact}>
              <View>
                <Text style={[styles.caption3 ]}>About Us</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      
      
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({


  container1: {
    flex: 1,
    justifyContent: "space-between",
  },

  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },

  content: {
    flexDirection: "row",
    justifyContent: "center", // can giua theo truc y
    alignItems: "center", // can giua theo truc x

  },

  content1: {
    justifyContent: "center", // can giua theo truc y
    alignItems: "center", // can giua theo truc x
    padding: 5,

  },
  formlogo: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent:"center",
    marginTop: 70,
  
  },

  logo: {
    width: 260,
    height: 50,
    resizeMode: "contain",
    // position: "absolute",
    // top: 60,
    // marginBottom: 30,
  },
  form0: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "space-between",
    
  },

  form: {
    flexDirection: "row",
    marginTop: 25,
    alignItems: "center",
    width: "100%",
    maxWidth: 300,
    borderRadius: 20,

  },
  form1: {
    width: "100%",
    marginTop: 25,
    maxWidth: 300,
    borderRadius: 20,
    justifyContent: "space-between",
  },
  form2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: 5,
    borderRadius: 20,
  },

  form3: {
    flexDirection: 'row',
    marginBottom: 30,
  },

  input: {
    width: "100%",
    maxWidth: 300,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 25,
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
  },
  caption2: {
    color: 'white',
    fontWeight: "bold",
    textAlign: 'right',
  },

  caption3: {
    color: 'gray',
    fontWeight: "bold",
  },

  helpcontact: {
    marginLeft: 20, 

  },


});

export default Login;
