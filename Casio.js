import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,FlatList, View,TouchableOpacity, Image } from 'react-native';

const WATCHcasio =  [{
  id: "166800C_A_107X1",
  title: "YATCH MASTER",
  price: "$110",
  picture:'https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0010_m116681-0002-yacht-master-ii.jpg?imwidth=550'
},
{
  id: "M7652_D_08X1",
  title: "MILGAUSE",
  price: "$55",
  picture:'https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0013_m86409rbr-0001-pearlmaster-39.jpg?imwidth=550'
},
{
  id: "171546C_A_107X1",
  title: "DATEJUST",
  price: "$120",
  picture:'https://content.rolex.com/dam/new-watches-2021/homepage/roller/all-watches/watches_0003_m126200-0020-datejust.jpg?imwidth=550'
},
{
  id: "162054C_A_107X1",
  title: "CELLINI",
  price: "$955",
  picture:'https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0014_m50535-0002-cellini-moonphase.jpg?imwidth=550'
},
{
  id: "168817C_A_107X1",
  title: "SKYDWELLER",
  price: "$1000",
  picture:'https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0000_m326238-0009-sky-dweller.jpg?imwidth=550'
},
{
  id: "159573C_A_107X1",
  title: "CONS CTAS PRO",
  price: "$75",
  picture:'https://www.casio-intl.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fjpeg&blobheadername1=content-disposition&blobheadervalue1=inline%3Bfilename%3D2_Retrograde_720x405_A.jpg&blobkey=id&blobtable=MungoBlobs&blobwhere=1426245635967&ssbinary=true'
},
];

const renderItem = ({ item }) => (
  <View style={styles.casiowatches}> 
    <TouchableOpacity>
      <View style={styles.casiowatches}>
    <Image resizeMode='contain' style={{height:300,width:400}} source={{uri:item.picture}}/>
    <Text style={styles.itemstyle}>{item.title}</Text>
    <Text>{item.price}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default function Casioshop() {
  return (
    <View style={styles.container}>
      <FlatList
        data={WATCHcasio}
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
  casiowatches: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemstyle: {
    fontSize:18
  },
});