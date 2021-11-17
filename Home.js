import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Image,TouchableOpacity,ScrollView ,Text, View,TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { AntDesign } from '@expo/vector-icons';


export default function Home({navigation}) {
  return (
    <ScrollView>
       
    <View style={styles.container}>
       <View style={{justifyContent:'flex-end'}}>
          <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')}>
      
              <AntDesign name="shoppingcart" size={40} color="yellow" />
          </TouchableOpacity>
        </View>
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
      <ScrollView horizontal={true}>  
      <View style={{flexDirection:'row', marginBottom:20, }}>
      <View style= {styles.productView}> 
            <View >
            <TouchableOpacity  style ={styles.groupings} onPress={() => navigation.navigate('Bulgari')}>
                <Text > Bulgarishop </Text>
            </TouchableOpacity>
            </View>
        </View>
        <View style= {styles.productView}>   
            <View >
            <TouchableOpacity  style ={styles.groupings} onPress={() => navigation.navigate('Casio')}>
                <Text > CasioShop </Text>
            </TouchableOpacity>
            </View>
        </View>
        <View style= {styles.productView}>   
            <View >
            <TouchableOpacity  style ={styles.groupings} onPress={() => navigation.navigate('Rolex')}>
                <Text > RolexShop</Text>
            </TouchableOpacity>
            </View>
        </View>
        <View style= {styles.productView}>   
            <View >
            <TouchableOpacity  style ={styles.groupings} onPress={() => navigation.navigate('Caveman')}>
                <Text > Caveman </Text>
            </TouchableOpacity>
            </View>
           
        </View>
     </View>
     </ScrollView>
  
    <View style={{flexDirection:'row'}}>
      <View style={{marginEnd:20,}}> 
          <Image
            fadeDuration={1000} 
            style={{width:200,height:200}}
            resizeMode='contain'
            source={require('../assets/Bulgarishop.png')}/>
           <Text style={{alignSelf:'center'}}> Bulgari</Text>
          <View>
          <Image
            fadeDuration={1000} 
            style={{width:200,height:200}}
            resizeMode='contain'
            source={require('../assets/maserati.webp')}/>
        <Text style={{alignSelf:'center'}}>Maserati</Text>

        

          </View>
       
      </View>
      <View style={{alignContent:'space-around'}}>
          <Image
            fadeDuration={1000} 
            style={{width:200,height:200}}
            resizeMode='contain'
            source={require('../assets/Caveman.jpeg')}/>
        <Text style={{alignSelf:'center'}}>Caveman</Text>
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
      <TouchableOpacity onPress={() => navigation.navigate('ShoppingCart')}>
        <Text style={{alignSelf:'center'}}>Rolex</Text>
          </TouchableOpacity> 
          </View>
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
     
          <Image
            fadeDuration={1000} 
            style={{width:200,height:200}}
            resizeMode='contain'
            source={require('../assets/Caveman.jpeg')}/>
          <View>

        <Text style={{alignSelf:'center'}}>casio</Text>
          </View>
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
  topView: {
        
  },

  productView: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  groupings:{
    width: 100,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderColor: "#FF6500",
    marginHorizontal:20,

},
});