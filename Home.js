
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Image,TouchableOpacity,ScrollView ,Text, View,TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';



export default function Home({navigation}) {
  return (
    <ScrollView>
    <View style={styles.container}>
      
    <Text style={{fontSize:10}}>Welcome elige tus doblajes</Text>
      <View style={{
        flexDirection:'row',
        backgroundColor:'#e8e9eb',
        marginTop:30,
        marginBottom:30,
        padding:20,
        borderRadius:30,
        width:350}}>
        <View stlye={{flex:3,padding:20}}>
        <FontAwesome name="search" size={24} color="black" />
        </View>
        <View style={{flex:7,alignContent:'flex-start'}}>
        <TextInput style={{color:'black'}} placeholder='Search here'/>
        </View>
        <TouchableOpacity>
        <View style={{flex:1}}>
        <Feather name="menu" size={24} color="black" />
        </View>
        </TouchableOpacity>
      </View>
    <View style={{flexDirection:'row'}}>
      <View style={{marginEnd:20,}}> 
      <TouchableOpacity onPress={() => navigation.navigate('Bulgari')}>
          <Image
            fadeDuration={1000} 
            style={{width:200,height:200}}
            resizeMode='contain'
            source={require('../assets/Bulgarishop.png')}/>
        <Text style={{alignSelf:'center'}}>Bulgari</Text>
          </TouchableOpacity>
          <View>
          <TouchableOpacity onPress={() => navigation.navigate('Maserati')}>
          <Image
            fadeDuration={1000} 
            style={{width:200,height:200}}
            resizeMode='contain'
            source={require('../assets/maserati.webp')}/>
        <Text style={{alignSelf:'center'}}>Maserati</Text>
          </TouchableOpacity>
        

          </View>
       
      </View>
      <View style={{alignContent:'space-around'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Caveman')}>
          <Image
            fadeDuration={1000} 
            style={{width:200,height:200}}
            resizeMode='contain'
            source={require('../assets/Caveman.jpeg')}/>
        <Text style={{alignSelf:'center'}}>Caveman</Text>
          </TouchableOpacity>
          <Image style={{height:200,width:200}}source={require('../assets/kk.jpg')}/>
        <Text style={{alignSelf:'center'}}>Blancpain</Text>
      </View>
    </View>
    <View style={{flexDirection:'row'}}>
      <View style={{marginEnd:20,}}>
      <TouchableOpacity onPress={() => navigation.navigate('Rolex')}>
          <Image
            fadeDuration={1000} 
            style={{width:200,height:200}}
            resizeMode='contain'
            source={require('../assets/Rolex.webp')}/>
        <Text style={{alignSelf:'center'}}>Rolex</Text>
          </TouchableOpacity>
          <View>
          <TouchableOpacity onPress={() => navigation.navigate('Rolex')}>
          <Image
            fadeDuration={1000} 
            style={{width:200,height:200}}
            resizeMode='contain'
            source={require('../assets/omega.png')}/>
  
            <Text style={{alignSelf:'center'}}>Omega</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={{alignContent:'space-around'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Casio')}>
          <Image
            fadeDuration={1000} 
            style={{width:200,height:200}}
            resizeMode='contain'
            source={require('../assets/Caveman.jpeg')}/>
        <Text style={{alignSelf:'center'}}>Casio</Text>
          </TouchableOpacity> 
        <Image style={{height:200,width:200}} source={require('../assets/kk2.jpg')}/>
        <Text style={{alignSelf:'center'}}>Casio</Text>
      </View>
    </View>
      
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius:25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
