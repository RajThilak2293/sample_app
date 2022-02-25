
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
import { Headline,  } from 'react-native-paper';


export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setfirst] = useState("");
  const [lastname, setlast] = useState("");

  return (
    <View style={styles.container}>      
      
      <View>
          <Headline style={{fontSize:30, fontWeight: 'bold', }}> Create Account</Headline>
          <Headline style={{fontSize:15, textAlign:"center", borderRadius:25, }}>create anew account</Headline>

      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name"
          placeholderTextColor="#000000"
          onChangeText={(firstname) => setfirst(firstname)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name"
          placeholderTextColor="#000000"
          onChangeText={(lastname) => setlast(lastname)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Email"
          placeholderTextColor="#000000"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone"
          placeholderTextColor="#000000"
          onChangeText={(Phone) => setEmail(Phone)}
          keyboardType="numeric"
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Password"
          placeholderTextColor="#000000"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="#000000"
          secureTextEntry={true}
          onChangeText={(confirmpassword) => setPassword(confirmpassword)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
                      height: 90,
                      borderRadius: 15,
                     
                      alignItems: 'center',
                      justifyContent: 'center',
                      }}>
        <View>
          <Text>
            Already have a account?
          </Text>
        </View>
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

  loginText: {
    color: '#dcdcdc',
  }, 
 
  image: {
    marginBottom: 30,
    width: 100,
    height: 100,
    resizeMode: 'stretch'
  },
 
  inputView: {
    backgroundColor: "#dcdcdc",
    borderRadius: 10,
    width: "90%",
    height: 45,
    marginBottom: 20, 
    alignItems: "flex-start",
  },
 
  TextInput: {
    height: 20,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color:'green'
  },
 
  forgot_button: {
    height: 22,
    marginBottom: 20,
    alignItems:"flex-end",
    color:'green'
  },
  TouchableOpacity : {
    height: 20,
    marginBottom: 10,

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




