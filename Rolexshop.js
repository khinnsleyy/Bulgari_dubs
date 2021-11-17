import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,FlatList, View,TouchableOpacity, Image, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const WATCHrolex =  [{
  id: "166800C_A_107X1",
  title: "ECB-900PB-1AEDIFICE ",
  price: "$110",
  picture:'https://www.casio-intl.com/product/image/1425585574128/'
},
{
  id: "M7652_D_08X1",
  title: "Datejust",
  title:"The classic watch of reference",
  price: "$550",
  picture:'https://content.rolex.com/dam/new-watches-2021/homepage/roller/all-watches/watches_0004_m124273-0001-explorer.jpg?imwidth=550'
},
{
  id: "171546C_A_107X1",
  title: "LADY-DATEJUST",
  price: "$120",
  picture:'https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0001_m279138rbr-0015-lady-datejust-28.jpg?imwidth=550'
},
{
  id: "162054C_A_107X1",
  title: "CHUCK 70",
  price: "$85",
  picture:'https://www.casio-intl.com/product/image/1425595109448/150_180/'
},
{
  id: "168817C_A_107X1",
  title: "Cosmograph Daytona",
  price: "$2500",
  picture:'https://content.rolex.com/dam/new-watches-2021/homepage/roller/all-watches/watches_0012_m116519ln-0038-cosmograph-daytona.jpg?imwidth=550'
},
{
  id: "159573C_A_107X1",
  title: "SKY-DWELLER",
  price: "$750",
  picture:'https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0000_m326238-0009-sky-dweller.jpg?imwidth=550'
},
];

const renderItem = ({ item }) => (
  <View style={styles.rolexwatches}>
    <TouchableOpacity>
      <View style={styles.rolexwatches}>
    <Image resizeMode='contain' style={{height:300,width:400}} source={{uri:item.picture}}/>
    <Text style={styles.itemstyle}>{item.title}</Text>
    <Text>{item.price}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default function Rolexshop() {
  return (
     <View style={styles.container}>
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
  
      <FlatList
        data={WATCHrolex}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    borderRadius:5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rolexwatches: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemstyle: {
    fontSize:18
  },
});