import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity,Image } from "react-native";
import Shoes from "./Shoes";
import { FlatList } from "react-native-gesture-handler";

const CartShoes = ({ text ,backgroundColor, color, route}) => {
  const [col, setCol] = useState(color);
  const [bgCol, setBgcol]= useState(backgroundColor);
  const {price, type ,size} = route?.params || {};

  console.log(route?.params, "route?.params")

  return (
    <TouchableOpacity
      onPress={() => (col === "#000" ? setCol("#fff") : setCol("#000") && bgCol== "#fff" ? setBgcol("#E94D2B"): setBgcol("#fff"))}
      style={{
        alignItems:"baseline",
        padding: 10,
        borderRadius: 20,
        justifyContent:"center",
        marginTop:15
  
      }}
    >
        <View style={styles.nav}>
        <View style={styles.image}>
        <Image
        style={{
          width: 30,
          height: 30, 
        }}
        source={require("../images/nike(red).jpg")}
      />
        </View>
        <Text style={{ color: col , marginTop:5}}>{text}</Text>
        <View >
        <Text style={styles.type}>{type}hi</Text>  
        <Text style={styles.size}>{size}lo</Text>
        <Text style={styles.price}>{price}up</Text>
        </View>
        </View>
       
    </TouchableOpacity>
  );
};

const Nav = () => {
  return (
    <View style={styles.nav}>
      <CartShoes color="#000"  />
      <CartShoes color="#000"/>
      <CartShoes color="#000"/>
      <CartShoes color="#000"/>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    
    justifyContent: "space-between",
    
  },

  image:{
      backgroundColor:"#F6F6F6",
      paddingHorizontal:18,
      paddingVertical:12,
      borderRadius:5,
      
      
  },
  type:{
    fontSize:16,
},
size:{fontSize:12
},
price:{
    fontSize:18,
    fontWeight:"200"
}
});

export default Nav;