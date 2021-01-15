import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../colors';

const TitleText =(props)=>{
return(
    <View style={{width:'99%', alignSelf:'center',margin:5}}>
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
      // margin:4,
       width:'90%',
        textAlign:'center',
        width:210,
       // fontFamily:'Arial',
    fontWeight:"bold"
      },
})

export default TitleText;