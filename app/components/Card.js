import React from 'react';
import { Text , StyleSheet, Image, View} from 'react-native'

import colors from '../config/colors'

function Card({title, subTitle, image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} ></Image>
            <View style={styles.cardText}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    card:{
        alignSelf:'center',
        borderRadius:10,
        width:"90%",
        height:250,
        // margin:30,
        justifyContent:'space-between',
        alignItems:'flex-start',
        // alignContent:'center',
        backgroundColor:colors.white
    },
    image:{
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        alignSelf:"center",
        width:"100%",
        height:"70%",
        resizeMode:"cover"
    },
    cardText:{
        height:"30%",
        justifyContent:"space-between",
        paddingHorizontal:15,
        paddingVertical:13
    },
    title:{
        fontSize:16
    },
    subTitle:{
        color:colors.secondary,
        fontSize:16
    },
    button:{
        // fontSize:18,
        // fontFamily:Platform.OS === "android"? "Roboto": "Avenir",
        borderRadius:25,
        padding:15,
        color:colors.white,
        width:"90%",
        textAlign:'center',
        fontWeight:'bold',

    }
})

export default Card;