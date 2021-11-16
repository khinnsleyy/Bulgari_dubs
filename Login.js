import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput,Button,View,TouchableOpacity, ImageBackground } from 'react-native';
import { FontAwesome,AntDesign} from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';




export default function Login({navigation}) {
  return (
    
    <ImageBackground 
      blurRadius={0.5}
      style={styles.container}
      source={require("../assets/p7.jpg")}>

      <View>
        <Text style={{ fontSize: 40,
          color: 'grey', fontWeight: 'bold',
          paddingBottom: 20 }}>Bulgaridubs!<Octicons name="watch" size={30} color="grey" />
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
            title='SIGN IN'
            backgroundColor='white'
            color = "white"
            />
      </View>
      <TouchableOpacity>
      <View style={{padding:20}}>
      <Text style={{color:'white',fontSize:20}}> SIGN UP WITH    <AntDesign name="google" size={24} color="yellow" /> </Text>
      <Text style={{color:'white',fontSize:15,alignSelf:'center'}}>    
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
    flex:1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    textShadowColor:'black',
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