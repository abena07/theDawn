import  React from "react";
import { StyleSheet , Text, View, Image} from "react-native";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';



export default function HomePage({ navigation }){
    return(
        <View>
            <View style={styles.view1}>
                
                <Ionicons name="ios-menu-outline" size={24} color="black" />
                <Feather name="search" size={24} color="black" />
            
                
                    
            
            
            </View>
                <LinearGradient
                    colors={['#272320', '#C47945' ]}
                    locations ={[0.8,  0.9]}
                    style={styles.linearGradient}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 0.7, y: 0.5 }}
                    >
       
                    <View>
                    <Text style={styles.text1}>
                        New Release
                    </Text>
                    <Text style={styles.text2}>
                        Nike Air {'\n'}Max 90
                    </Text>
                    </View>
                    <View>
                     <Image
                        style={{
                        width: 190,
                        height: 120,
                        marginHorizontal:10,
                        
                         }}
                        source={require("../images/nike(red).jpg")}/>
                    </View>
            
                </LinearGradient>
        </View>
  
    );
}

const styles = StyleSheet.create({
    view1:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop:80,
        marginHorizontal:25,
      

    },
    firstcard:{ 
    flexDirection:"row",
    justifyContent: "center",
    alignItems:'stretch',
    width: 360,
    height: 150,
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: "#eee",
    marginVertical: 10,
    marginHorizontal:25,

    },
    text1:{
        color:"white",

    },
    text2:{
        color:"white",
        fontSize:25, 
        fontWeight:"bold"
    },
    linearGradient: {
        flexDirection:"row",
        justifyContent: "center",
        alignItems:'stretch',
   
    width: 360,
    height: 150,
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: "#eee",
    marginVertical: 10,
    marginHorizontal:25,
      
      },
    

});