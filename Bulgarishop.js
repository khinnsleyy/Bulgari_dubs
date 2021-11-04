import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,FlatList, View,TouchableOpacity, Image } from 'react-native';

const WATCHbulgari =  [{
  id: "166800C_A_107X1",
  title: "MAFIA CITY",
  price: "$110",
  picture:'https://www.bulgari.com/en-ae/103'
},
{
  id: "M7652_D_08X1",
  title: "OCTO LORENGNILE WATCH",
  price: "$55",
  picture:'https://www.bulgari.com/en-ae/102560.html'
},
{
  id: "171546C_A_107X1",
  title: "BULGARI 2",
  price: "$120",
  picture:'https://www.bulgari.com/en-ae/102212.html'
},
{
  id: "162054C_A_107X1",
  title: "HAUTE HORLOGERIE WATCH",
  price: "$85",
  picture:'https://www.bulgari.com/en-ae/101933.html'
},
{
  id: "168817C_A_107X1",
  title: "OCTO ROMA WATCH",
  price: "$100",
  picture:'https://www.bulgari.com/en-ae/102702.html'
},
{
  id: "159573C_A_107X1",
  title: "BULGARI BULGARI WATCH",
  price: "$75",
  picture:'https://www.bulgari.com/en-ae/102430.html'
},
];

const renderItem = ({ item }) => (
  <View style={styles.bulgariwatches}>
    <TouchableOpacity>
      <View style={styles.bulgariwatches}>
        <Image resizeMode='contain' style={{height:300,width:400}} source={{uri:item.picture}}/>
        <Text style={styles.itemstyle}>{item.title}</Text>
        <Text>{item.price}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default function Bulgarishop() {
  return (
    <View style={styles.container}>
      <FlatList
        data={WATCHbulgari}
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bulgariwatches: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemstyle: {
    fontSize:18
  },
});