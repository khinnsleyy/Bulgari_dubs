import { StatusBar } from "expo-status-bar";
import React, { Component } from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput,Button,TouchableOpacity,} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


export default function Login(navigation) {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Signup, setSignup]= useState("");

  return (
    <View style={styles.container}>
      <Image  style={styles.image} source={require("../assets/kk2.jpg")} />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="blue"
          onChangeText={(email) => setEmail(email)}/>
      </View>
    
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="blue"
          secureTextEntry={true}
          onChangeText={(Password) => setPassword(Password)}
        />
      </View>
      <View>
        <TextInput
        style={styles.TextInput}
        placeholder="sign up with."
        placeholderTextColor="yellow"
        onChangeText={(signup) => setSignup(Signup)}
        />
      </View>  
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
     
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.LoginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.SignupText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: "black",
    
  },

  image: {
    flex:1,
    marginTop:50,
    marginBottom:50,
  },


  inputView: {
    backgroundColor: "yellow",
    borderRadius: 30,
    alignSelf:'center',
    width: "70%",
    height: 45,
    marginBottom: 20,
    justifyContent:'center',
     alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    alignContent:'center',
    alignItems:'center',
  },

  forgot_button: {
    height: 40,
    padding:10,
    paddingBottom:10,
    alignSelf:'center',
    backgroundColor:'white',
    borderRadius:35,
    marginBottom: 5,
  },

  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignSelf:'center',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    backgroundColor: "yellow",
  },
  SignupBtn: {
      textShadowColor:"blue",
      alignItems: "center",
      justifyContent: "center",
      marginTop:50,
      backgroundColor: "yellow",
  },
});