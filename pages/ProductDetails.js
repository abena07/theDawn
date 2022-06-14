import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import TinyShoes from "../components/TinyShoes";



export default function Home({ navigation , route}) {
    const { name, price, image, type } = route.params.data;

  return (
    <View
      style={{
        backgroundColor:"#F6F6F6",
        flex: 1,
        paddingTop: 55,
        
      }}
    >
        <View style={styles.second}>
            <Ionicons name="chevron-back" size={24} color="black" />
            <Ionicons name="heart-outline" size={24} color="black" />          
        </View>

        <Image style={styles.imagecontainer} source={image}
        />

        <View style={styles.third}>
        <View style={styles.textcontainer}>
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Text style={styles.type}>{type}</Text>
                <Text style={styles.price}>{price}</Text>
                </View>
            <Text style={styles.name}>{name}</Text>
        </View>
       
        </View>
        
    </View>
    
  );
}

const styles = StyleSheet.create({

 second:{
     flexDirection:"row",
     justifyContent:"space-between",
     marginTop:20,
     paddingHorizontal: 20,
     

 },
 third:{
     borderRadius:40,
     backgroundColor:"white",
     height:490,
    },
imagecontainer:{
    width: 200,
    height: 200,
    marginHorizontal:60,
    marginVertical:30,
},

type:{
    fontSize:25,
    fontWeight:"400"
},
name:{fontSize:10,
    color:"#DADADA"
},
textcontainer:{
   marginVertical:30,
   marginHorizontal:20
},
price:{
    fontSize:25,
    fontWeight:"400"
}
  
});