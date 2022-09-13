import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const CartShoes = ({}) => {
  const navigation = useNavigation();
 
  const numColumns = 1

  const [details, setDetails] = useState([
    {
        name: "Men's Shoes",
        type: "Creter impact",
        price: "$99.56",
        key: "1",
        image: require("../images/nike(red).jpg"),
        size: "Size 42"
    },
    {
        name: "Men's Shoe",
        type: "Air Max Pre-day",
        price: "$137.50",
        key: "3",
        image: require("../images/nike(red).jpg"),
        size: "Size 42"
    },


    {
        name: "Men's Shoes",
        type: "Creter impact",
        price: "$99.56",
        key: "4",
        image: require("../images/nike(red).jpg"),
        size: "Size 42"
    },
    {
        name: "Men's Shoe",
        type: "Air Max Pre-day",
        price: "$137.50",
        key: "2",
        image: require("../images/nike(red).jpg"),
        size: "Size 42"

    },

]);

  return (
    <View>
               <FlatList
                    numColumns={2}
                    key={2}
                    data={details}
                    renderItem={({ item }) => (
      
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("CartPage",{type,size,price})}
      
        style={{
          alignItems: "baseline",
          padding: 10,
          borderRadius: 20,
          justifyContent: "center",
          marginTop: 15

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
          <Text style={{ color: col, marginTop: 5 }}>hi</Text>
          <View >
            <Text style={styles.type}>{item.type}</Text>
            <Text style={styles.size}>{item.size}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>

      </TouchableOpacity>
                    )}/>
      
    </View>
    
  );
 
};

const Nav = () => {
  return (
    <View style={styles.nav}>
      <CartShoes color="#0000" />
      <CartShoes color="#0000" />
      <CartShoes color="#0000" />
      <CartShoes color="#000o" />


    </View>
  );
};

const styles = StyleSheet.create({
  nav: {

    justifyContent: "space-between",

  },

  image: {
    backgroundColor: "#F6F6F6",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 5,


  },
  type: {
    fontSize: 16,
  },
  size: {
    fontSize: 12
  },
  price: {
    fontSize: 18,
    fontWeight: "200"
  }
});

export default Nav;