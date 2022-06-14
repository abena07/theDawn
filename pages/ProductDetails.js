import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';



export default function Home({ navigation }) {
 

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

        <Image
        style={{
          width: 200,
          height: 200,
          marginHorizontal:60,
          marginVertical:30,
          
        }}
        source={require("../images/nike(red).jpg")}
      />

        <View style={styles.third}>

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
    
     
 }
  
});