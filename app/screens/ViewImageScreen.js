import { StatusBar,StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from "../config/colors"

export default function ViewImageScreen() {
  return (
    <View style={styles.chairScreen}>
      <View style={{flexDirection:"row", justifyContent:"space-between", }}>
          <MaterialCommunityIcons style={{left:20}} name='close' size={30} color={colors.white} />
          <MaterialCommunityIcons style={{right:20}} name='trash-can-outline' size={30} color={colors.white} />
      </View> 
      <Image  source={require("../assets/chair.jpg")} style={{width:"100%", height:"100%"}} resizeMode="contain" ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  chairScreen:{
    backgroundColor:colors.black,
    paddingTop: StatusBar.currentHeight+20,
    height:"100%",
    // width:"100%",
    justifyContent: 'space-around',
    // alignItems:'flex-start'
  },
});
