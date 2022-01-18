import React, { Component } from "react";
import { View ,Text, TextInput,StyleSheet} from "react-native";

class BottomComponent extends Component{
  render(){
    return (<View style={style.container}>
        <View style={style.box}></View>
        <View style={style.box}></View>
        <View style={style.box}></View>
        <View style={style.box}></View>
        
       
      
    </View>);
  }
}
const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#bbf',
        flexDirection:'row',
        flexWrap:'wrap',
       // borderTopEndRadius:10,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        justifyContent:'center',
        alignContent:'center'
        

    },
    box:{
        width:'40%',
        height:'40%',
        margin:15,
        padding:10,
        backgroundColor:'#421eb3',
        borderRadius:12
    }
})
export default BottomComponent;