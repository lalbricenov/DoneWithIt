import { SafeAreaView, StyleSheet, Text, View, ImageBackground, Platform, StatusBar } from 'react-native';


import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import AppText from './app/components/AppText';
import Button from './app/components/Button';
import Card from './app/components/Card';
import colors from './app/config/colors';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

export default function App() {
  return (
    // <WelcomeScreen></WelcomeScreen>
    // <ListingDetailsScreen></ListingDetailsScreen>
    <ViewImageScreen></ViewImageScreen>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor:colors.cream
  },
  text:{
    fontSize:30,
    fontFamily: "serif",
    fontStyle:"italic",
    fontWeight:"500",
    color:"tomato",
    textTransform:"capitalize",
    // textDecorationLine:"underline"
    textAlign:"right",
    lineHeight: 30
  }

});

