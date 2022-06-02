import  React from "react";
import { StyleSheet , Text, View,Image} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons'; 


export default function Home(){
    return(
        <View  style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
           }}
            >
        
      <LinearGradient
          colors={['3E3737', 'F35B2B' ]}
          locations ={[0.8,  0.9]}
          style={styles.linearGradient}
        >
          <Image
        style={{
          width: 200,
          height: 200,
          borderRadius: 20,
          marginBottom: 30,
          marginTop: 10,
          
        }}
        source={require("../images/nike(red).jpg")}
      />
      <Text>Nike</Text>
        </LinearGradient>
        
        </View>
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
       width:"100%",
       flex:1
      },

});