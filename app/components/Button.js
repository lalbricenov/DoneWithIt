import React from 'react';
import { Text , StyleSheet} from 'react-native'

import colors from '../config/colors'

function Button({children, color}) {
    return (
        <Text style={[styles.button, {backgroundColor: color == "primary"? colors.primary : colors.secondary}]}>{children}</Text>
    );
}
const styles = StyleSheet.create({
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

export default Button;