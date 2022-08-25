import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { AntDesign, Entypo } from '@expo/vector-icons';
// import { CheckBox } from "react-native-elements";
import CartShoes from "../components/CartShoes";



export default function CartPage({ route }) {
    // const {  price, type ,size} = route.params.data;




    return (
        <View >
            <View style={styles.header}>
                <AntDesign name="left" size={20} color="black" />
                <Text style={styles.cart}>Cart</Text>
                <Entypo name="dots-three-vertical" size={20} color="black" />
            </View>


            {/* checkbox */}

            <CartShoes />



        </View>

    )
};


const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        paddingTop: 80,
        justifyContent: "space-between"
    },
    cart: {
        fontSize: 18,
        fontWeight: "400"
    },


})