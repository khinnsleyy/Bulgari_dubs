import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Image,TouchableOpacity,ScrollView ,Text, View } from 'react-native';
import Casioshop from './Casio';
import Cavemanshop from './Cavemanshop';
import Bulgarishop from './Bulgari';
import Rolexshop from './Rolexshop';


export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{padding: 20}}>
        <Text style={{fontSize:30}}>Welcome Bulgari_dubs!</Text>
      </View>
        <View style ={{backgroundColor:'#a66874',padding:8,borderRadius:30}}>
        <Text style={{fontSize:25, color:'white',fontWeight: 'bold'}}>Choose Your Brand</Text>
        </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Bulgari ')}>
        <Image 
            fadeDuration={1000} 
        style={{width:370,height:130}}
        resizeMode='contain'
        source={require('../assets/Bulgari.jpg')}/>
        <Text style={{alignSelf:'center'}}>
          Bulgari
        </Text>
        </TouchableOpacity>
      </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Rolex')}>
          <Image
            fadeDuration={1000} 
            style={{width:370,height:130}}
            resizeMode='contain'
            source={require('../assets/kk.jpg')}/>
        <Text style={{alignSelf:'center'}}>
          Rolex
        </Text>
          </TouchableOpacity>
        </View >
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Caveman')}>
        <Image 
            fadeDuration={1000} 
            style={{width:370,height:130,}}
            resizeMode='contain'
            source={require('../assets/kk5.jpg')}/>
        <Text style={{alignSelf:'center'}}>
          Caveman
        </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Casio')}>
        <Image 
            fadeDuration={1000} 
            style={{width:370,height:130}}
            resizeMode='contain'
            source={require('../assets/kk2.jpg')}/>
        <Text style={{alignSelf:'center'}}>
          Casioshop
        </Text>
        </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});