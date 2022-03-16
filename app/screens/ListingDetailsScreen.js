import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'


// import Card from '../components/Card';
import colors from '../config/colors';

export default function ListingDetailsScreen() {
  return (
    // <WelcomeScreen></WelcomeScreen>
    <View style = {styles.container}>
        <Image style={styles.image} source={require("../assets/jacket.jpg")} ></Image>
        <View style={styles.text}>
            <Text style={styles.title}>Red jacket for sale!</Text>
            <Text style={styles.subTitle}>$100</Text>
            <View style={styles.userDescription}>
                <Image style={styles.profilePic} source={require("../assets/mosh.jpg")}></Image>
                <View>
                    <Text >Mosh Hamedani</Text>
                    <Text style={styles.userListingsCount}>5 Listings</Text>
                </View>
            </View>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: "flex-start",
      alignItems:"flex-start",
      backgroundColor:colors.white
    },
    image:{
        height:250,
        width:"100%"
    },
    title:{
        fontSize:20,
        paddingBottom:10
    },
    subTitle:{
        color:colors.secondary,
        fontSize:16
    },
    text:{
        padding:15
    },
    profilePic:{
        width:60,
        height:60,
        borderRadius:30,
        marginRight:12
    },
    userDescription:{
        flexDirection:'row',
        paddingTop:40
    },
    userListingsCount:{
        color: colors.gray
    }
  
  });
  
  