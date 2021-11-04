import React, { Component } from 'react';
import { Button, View, Text,Image,style } from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Home=({navigation})=>{ 
  return(
    <View styles={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Image styles={styles.image} source={require("../assets/kk.jpg")} />
      <Button title="Sales Mode" onPress={() =>(navigation.navigate('Login'))} />
      <Text>
        So this application is about seling of writ watches 
        cash would not be returned 
        Agree on term nd conditions to continue
      </Text>
      <Text>
      Terms of service are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service. Terms of service can also be merely a disclaimer, especially regarding the use of websites. Wikipedia
      </Text>
     
      <Button title='agree to terms and condtion' onPress={() =>(navigation.navigate('Login'))}/>
    
    </View>
    
  )
}

export default Home


const styles=StyleSheet.create({
  flex:1,
  height:8,
  width:60,
  
  
  image: {
    flex:1,
    marginTop:5,
    marginBottom:50,
    width:60,
    marginBottom:60,
    paddingBottom:50,

  },
  
});
