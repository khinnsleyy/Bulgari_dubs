import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,FlatList,View,TouchableOpacity, Image } from 'react-native';

const WATCHcaveman =  [{
  id: "166800C_A_107X1",
  title: "CAVEMAN HERITAGE",
  price: "$110",
  picture:'https://www.cavemanwatches.com/wp-content/uploads/2021/01/IMG_5227-300x300.jpg'
},
{
  id: "M7652_D_08X1",
  title: "TURBO ICON",
  price: "$55",
  picture:'https://www.cavemanwatches.com/wp-content/uploads/2016/03/WhatsApp-Image-2020-07-28-at-5.24.42-PM-1-300x300.jpeg'
  },
{
  id: "171546C_A_107X1",
  title: "PREMIUM TURBO",
  price: "$120",
  picture:'https://www.cavemanwatches.com/wp-content/uploads/2020/08/C848FCEC-ED38-45BB-A02D-F0B86C853ED2-300x300.jpeg'
},
{
  id: "162054C_A_107X1",
  title: "ZEBRA WOODPECKER",
  price: "$85",
  picture:'https://www.cavemanwatches.com/wp-content/uploads/2020/12/zebra-300x300.jpg'
},
{
  id: "168817C_A_107X1",
  title: "BLACK HERMIT",
  price: "$100",
  picture:'https://www.cavemanwatches.com/wp-content/uploads/2016/03/WhatsApp-Image-2020-07-28-at-5.24.42-PM-300x300.jpeg'
},
{
  id: "159573C_A_107X1",
  title: "BLUE VOLTA",
  price: "$75",
  picture:'https://www.cavemanwatches.com/wp-content/uploads/2021/01/caveman-3-300x300.jpeg'
},
];

const renderItem = ({ item }) => (
  <View style={styles.cavemanwatches}>
    <TouchableOpacity>
      <View style={styles.cavemanwatches}>
    <Image resizeMode='contain' style={{height:300,width:400}} source={{uri:item.picture}}/>
    <Text style={styles.itemstyle}>{item.title}</Text>
    <Text>{item.price}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default function Cavemanshop() {
  return (
    <View style={styles.container}>
      <FlatList
        data={WATCHcaveman}
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
  cavemanwatches: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemstyle: {
    fontSize:18
  },
});