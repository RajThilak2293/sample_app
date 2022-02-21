
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { Headline } from 'react-native-paper';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>      
      <Image style={styles.image} source={require("../Adaptive/assets/logo.png")} />
      <View>
        <View>
          <Headline style={{fontSize:30, fontWeight: 'bold', }}> Welcome Back</Headline>
          <Headline style={{fontSize:15, textAlign:"center", borderRadius:25, }}>Sign to continue</Headline>

           </View>
      </View>
 
      
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Login?</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 30,
    width: 100,
    height: 100,
    resizeMode: 'stretch'
  },
 
  inputView: {
    backgroundColor: "#2e8b57",
    borderRadius: 10,
    width: "90%",
    height: 50,
    marginBottom: 20, 
    alignItems: "flex-start",
  },
 
  TextInput: {
    height: 20,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 20,
    marginBottom: 20,
    alignItems:"flex-end",
  },
  TouchableOpacity : {
    height: 20,
    marginBottom: 20,

  },

  loginBtn: {
    width: "90%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#2e8b57",
  },
});
export default App;