import React from "react";
import { StyleSheet, View, Text,TouchableOpacity } from "react-native";
import { AntDesign, Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
// import { CheckBox } from "react-native-elements";




export default function CartPage({route ,navigation}) {
    const {type, size, price, image, name} = route.params;

    const getEntries = async () => {
        await AsyncStorage.setItem('key', 'val');
        const value = await AsyncStorage.getItem('key');
        console.log(value);}


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


            
            <TouchableOpacity>
            <Text> {type} </Text>
            <Text> {price} </Text>
            <Text>{size}</Text>
            <Text>{name}</Text>
            <Text style={{color:"black"}}>{image}</Text>
            </TouchableOpacity>
            

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