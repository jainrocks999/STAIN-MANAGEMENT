import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
//import { TouchableHighlight } from 'react-native-gesture-handler';
import colors from '../colors';
const CustomButton = (props) => {
    return (

        <TouchableHighlight style={styles.button} onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    button: {
        height: 50,
        width: '50%',
        padding: 10,
        marginTop: 15,
        backgroundColor: colors.orange,
        opacity: 87,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: colors.white
    },
    buttonText: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        color: colors.white,
        fontSize: 15,
        alignSelf: 'center',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        textAlign: 'center'
    },
})

export default CustomButton;