import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../colors';

const TitleText =(props)=>{
return(
    <View style={{width:'90%', alignSelf:'center'}}>
        <Text
        numberOfLines={2}
            style={[styles.headerText,{color:props.color,fontSize:props.fontSize}]}>
            {props.title}
          </Text>
    </View>
)
}
const styles = StyleSheet.create({
    headerText:{
       margin:4,
       width:'90%',
        textAlign:'center',
       // width:210,
       // fontFamily:'Arial',
    fontWeight:"600"
      },
})

export default TitleText;