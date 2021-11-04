import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput,Button,View,TouchableOpacity, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function Login({navigation}) {
  return (
    
    <ImageBackground 
      blurRadius={5}
      style={styles.container}
      justifyContent={'space-evenly'}
      source={require("../assets/kk4.jpg")}>

      <View>
        <Text style={{ fontSize: 40,
          color: 'white', fontWeight: 'bold',
          paddingBottom: 20 }}>Hello Bulgari_dubs!
        </Text>
        </View>
        <View style= {styles.input}>
        <TextInput 
          style={styles.textstyle}
          placeholder= "username or email"
        />
      </View>

      <View style={{paddingTop: 20}}>
      </View>
      <View style= {styles.input}>
        <TextInput 
        style={styles.textstyle}
        placeholder = 'password'
        secureTextEntry= {true}/>
      </View >
      <View style = {{paddingTop: 50,
      width: 370,
      marginTop:80,
      elevation: 5000}}>
        
        <Button    
            onPress={() => navigation.navigate('Home')}
            title = "SIGN IN"
            color = "#000"
            />
      </View>
      <TouchableOpacity>
      <View style={{padding:20}}>
      <Text style={{color:'white',fontSize:20}}> SIGN UP WITH 
        <AntDesign name="google" size={24} color="yellow" />
      </Text>
      <Text style={{color:'white',fontSize:20,borderRadius:25}}> OR    
      <FontAwesome name="apple" size={50} color="white"  />
      </Text>
      </View>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </ImageBackground>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#e8e9eb',
    borderRadius: 20,
    padding:25,
    marginTop: 40,
    width: 370
  },
  textstyle: {
    borderRadius:25,
    fontSize: 18,
    color: 'black',
    fontWeight: '200'
  }

});