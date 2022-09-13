// import React, { useState } from "react";
// import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

// const CartShoes = ({route, navigation}) => {

//   const { type, size, price } = route.params;

  

//   return (
//     <View>

      
//       <TouchableOpacity
//         onPress={() =>
//           navigation.navigate("CartPage",{type,size,price})}
      
//         style={{
//           alignItems: "baseline",
//           padding: 10,
//           borderRadius: 20,
//           justifyContent: "center",
//           marginTop: 15

//         }}
//     >
//         <View style={styles.nav}>
//           <View style={styles.image}>
//             <Image
//               style={{
//                 width: 30,
//                 height: 30,
//               }}
//               source={require("../images/nike(red).jpg")}
//             />
//           </View>
//           <Text style={{ color: col, marginTop: 5 }}>{text}</Text>
//           <View >
//             <Text style={styles.type}>{type}hi</Text>
//             <Text style={styles.size}>{size}lo</Text>
//             <Text style={styles.price}>{price}up</Text>
//           </View>
//         </View>

//       </TouchableOpacity>
      
//     </View>
    
//   );
 
// };

// const Nav = () => {
//   return (
//     <View style={styles.nav}>
//       <CartShoes color="#0000" />
//       <CartShoes color="#0000" />
//       <CartShoes color="#0000" />
//       <CartShoes color="#000o" />


//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   nav: {

//     justifyContent: "space-between",

//   },

//   image: {
//     backgroundColor: "#F6F6F6",
//     paddingHorizontal: 18,
//     paddingVertical: 12,
//     borderRadius: 5,


//   },
//   type: {
//     fontSize: 16,
//   },
//   size: {
//     fontSize: 12
//   },
//   price: {
//     fontSize: 18,
//     fontWeight: "200"
//   }
// });

// export default Nav;