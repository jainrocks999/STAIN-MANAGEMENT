import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../colors';

const TitleText =(props)=>{
return(
    <View style={{width:'90%'}}>
        <Text
            style={[styles.headerText,{color:props.color,fontSize:props.fontSize}]}>
            {props.title}
          </Text>
    </View>
)
}
const styles = StyleSheet.create({
    headerText:{
        margin:8,
       // width:'40%',
        textAlign:'center',
       // fontFamily:'Arial',
        fontWeight:"500"
      },
})

export default TitleText;