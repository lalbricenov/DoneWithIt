import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

import colors from '../config/colors';
import Button from '../components/Button';


export default function WelcomeScreen() {
  return (
    <ImageBackground style={[styles.imageBck]}  source={require("../assets/background.jpg")} resizeMode="cover" blurRadius={4}>
        <View style={styles.logo}>
            <Image source={require("../assets/logo-red.png")} style={{width:100, height:100}} />
            <Text >Sell What You Don't Need</Text>
        </View>
        <View style={styles.buttons}>
            <Button color="primary" style={styles.button}>LOGIN</Button>
            <Button color="secondary" >REGISTER</Button>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBck:{
    height:"100%",
    // width:"100%",
    justifyContent: "space-between",
    // alignItems:'flex-start'
    
  },
  logo:{
      alignSelf:'center',
      top:100,
      alignItems:'center'
  },
  buttons:{
    alignItems:'center',
    height:150,
    justifyContent:'space-evenly'
  },

});
