import React from "react";
import{Text,View,Image ,StyleSheet} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';



export default function Button({}){
    const navigation = useNavigation();
    return(
        <View >
            <TouchableOpacity  onPress={() =>{
                console.log("Hello")
                navigation.navigate("CartPage",{hello: "hsbhs"} )
            }
            }>
                <View style={styles.main}>
                <MaterialCommunityIcons name="cart-outline" size={24} color="#fff" />
                <Text style={styles.text}>Add To Cart</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        backgroundColor:"#E84727",
        padding:18,
        flexDirection:"row",
        borderRadius:20,
        paddingHorizontal:116,
        marginVertical:30

        
    },
    text:{
        color:"#FFF",
        fontSize:16,
        paddingLeft:18,
        paddingTop:3
       
    }
})