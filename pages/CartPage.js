import React from "react";
import { StyleSheet, View, Text,TouchableOpacity ,Image} from "react-native";
import { AntDesign, Entypo } from '@expo/vector-icons';
import AsyncStorage from 'react-native-async-storage/async-storage';
// import { CheckBox } from "react-native-elements";




export default function CartPage({route ,navigation}) {
    const {type, size, price, image, } = route.params;

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


            <View style={styles.contentdisplay}>
            

            <Image style={styles.imagecontainer} source={image}/>
             <TouchableOpacity>
            <Text style={styles.typecontainer}> {type} </Text>

            <Text style={styles.sizecontainer}>{size}</Text>
            <Text style={styles.pricecontainer}> {price} </Text>
            
        
          
        
            </TouchableOpacity>
            <View style={styles.contentdisplay}>
            <AntDesign name="minuscircleo" size={24} color="black" />
            <AntDesign name="pluscircleo" size={24} color="black" />

            </View>
            
            </View>
            

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
    pricecontainer:{
        fontSize:22,
        fontWeight:"700",

    },
    imagecontainer:{
        width: 80,
        height: 80,
        marginHorizontal:10,
        marginVertical:10,
    },
    contentdisplay:{
        flexDirection:"row",
     justifyContent:"space-between",
     paddingRight:200
    
    },
    sizecontainer:{
        fontSize:14,
        color:"#DADADA",
        fontWeight:"400",

    },
    typecontainer:{
        color:"#EEB5AA",
        fontSize:18,
        fontWeight:"600",
     
    }



})