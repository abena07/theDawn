import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity,Image } from "react-native";

const Category = ({ text, color }) => {
  const [col, setCol] = useState(color);
  return (
    <TouchableOpacity
      onPress={() => (col === "#000" ? setCol("fff") : setCol("#000"))}
      style={{
        alignItems: "center",
        padding: 8,
        backgroundColor: "#fff",
        borderRadius: 20,
        justifyContent:"center"
        
      }}
    >
        <View style={styles.nav}>
        <View style={styles.image}>
        <Image
        style={{
          width: 20,
          height: 20,
          borderRadius: 20,
         
        
          
        }}
        source={require("../images/nike(red).jpg")}
      />
        </View>
      
      <Text style={{ color: "black" , marginTop:5}}>{text}</Text>
        </View>
       
    </TouchableOpacity>
  );
};

const Nav = () => {
  return (
    <View style={styles.nav}>
      <Category text="Lifestyle" color="fff"  backgroundColor="#E94A2"/>
      <Category text="Basketball" color="#000" />
      <Category text="Running" color="#000" />
    
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  image:{
      backgroundColor:"#F6F6F6",
     
     padding:4,
      borderRadius:35/2
  }
});

export default Nav;