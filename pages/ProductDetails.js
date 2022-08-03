import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Ionicons , Feather} from '@expo/vector-icons';
import TinyShoes from "../components/TinyShoes";
import TinySizes from "../components/TinySizes";
import Button from "../components/Button";


export default function ProductDetails({ route}) {
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
                <View style={{flexDirection:"row", justifyContent:"space-between",marginTop:10}}>
                <Text style={styles.type}>{type}</Text>
                <Text style={styles.price}>{price}</Text>
                </View>

                <Text style={styles.name}>{name}</Text>
                <TinyShoes/>

                <View style={styles.sizecontainer}> 
                    <Text style={{fontSize:23}}>
                        Size
                    </Text>
                    <Text style={{color:"#E7E7E7", marginTop:6, fontSize:13}}>
                        Size Guide
                    </Text>
                </View>
              
                <TinySizes/>
                <View style={styles.sizecontainer}>
                <Text style={{fontSize:18, fontWeight:"400"}}>
                    Description
                </Text>
                <Feather name="chevron-down" size={24} color="black" />
            
                </View>
                <Button/>
                
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
},

sizecontainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:12
}
  
});