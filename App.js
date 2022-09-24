
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import  LandingPage from './pages/LandingPage';
import HomePage  from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';

export default function App() {
  const MainNavigator = createStackNavigator();
  return (
    <View style ={{flex: 1}}>
      <NavigationContainer>
        <MainNavigator.Navigator screenOptions={{headerShown:false}} initialRouteName = "Landingpage">
        <MainNavigator.Screen name ="LandingPage" component={LandingPage}/>
        <MainNavigator.Screen name='HomePage' component={HomePage}/>
        <MainNavigator.Screen name="ProductDetails" component={ProductDetails}/>
        <MainNavigator.Screen name="CartPage" component={CartPage}/>
        <MainNavigator.Screen name="Checkout" component={Checkout}/>
        </MainNavigator.Navigator>
      </NavigationContainer>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
