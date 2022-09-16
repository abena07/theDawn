import React from "react";
import { StyleSheet, View, Text,TouchableOpacity } from "react-native";
import { AntDesign, Entypo } from '@expo/vector-icons';

// import { CheckBox } from "react-native-elements";




export default function CartPage({route ,navigation}) {
    const {type, size, price} = route.params;




    return (
        <View >
            <View style={styles.header}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <AntDesign name="left" size={20} color="black" />
                </TouchableOpacity>
                <Text style={styles.cart}>Cart</Text>
                
                <Entypo name="dots-three-vertical" size={20} color="black" />
                
            </View>


            {/* checkbox */}


            

            <Text> {type} </Text>
            <Text> {price} </Text>
            <Text>{size}</Text>

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