import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,FlatList, View,TouchableOpacity, Image } from 'react-native';

const WATCHbulgari =  [{
  id: "166800C_A_107X1",
  title: "MAFIA CITY",
  price: "$110",
  picture:'https://media2.bulgari.com/f_auto,q_auto/production/dw137cf756/images/images/1234057.png'
},
{
  id: "M7652_D_08X1",
  title: "OCTO LORENGNILE WATCH",
  price: "$55",
  picture:'https://media2.bulgari.com/f_auto,q_auto/production/dwe9211754/images/images/484049.png'
},
{
  id: "171546C_A_107X1",
  title: "BULGARI 2",
  price: "$120",
  picture:'https://media2.bulgari.com/f_auto,q_auto/production/dw78e15cee/images/images/210370.png'
},
{
  id: "162054C_A_107X1",
  title: "HAUTE HORLOGERIE WATCH",
  price: "$85",
  picture:'https://media2.bulgari.com/f_auto,q_auto/production/dw17493ee2/images/images/224033.png'
},
{
  id: "168817C_A_107X1",
  title: "OCTO ROMA WATCH",
  price: "$100",
  picture:'https://media2.bulgari.com/f_auto,q_auto/production/dw1ecaffe7/images/images/1251396.png'
},
{
  id: "159573C_A_107X1",
  title: "BULGARI BULGARI WATCH",
  price: "$75",
  picture:'https://media2.bulgari.com/f_auto,q_auto/production/dwf798b080/images/images/1153919.png'
},
];

const renderItem = ({ item }) => (
  
  <View style={styles.bulgariwatches}>
    <TouchableOpacity >
        <Image resizeMode='contain' style={{height:300,width:400}} source={{uri:item.picture}}/>
        <Text style={styles.itemstyle}>{item.title}</Text>
        <Text>{item.price}</Text>
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