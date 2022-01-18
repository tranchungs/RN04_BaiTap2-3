import React, { Component } from "react";
import { View ,Text, TextInput, StyleSheet} from "react-native";

class TopComponent extends Component{
  render(){
    return (<View style={style.container}>
        <View style={style.box}></View>
        <View style={style.box}></View>
    </View>);
  }
}
const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#96CC96',
        justifyContent:'space-around',
        marginBottom:15,
        borderBottomEndRadius:10,
        borderBottomStartRadius:10
    },
    box:{
        margin:10,
        flex:0.4,
        backgroundColor:'#ffff55',
        borderRadius:10
      

    }
})
export default TopComponent;