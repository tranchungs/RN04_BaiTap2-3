import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import angry from '../Image/angry.png'
import care from '../Image/care.png'
import haha from '../Image/haha.png'
import like from '../Image/like.png'
import love from '../Image/love.png'
import sad from '../Image/sad.png';


export default class Emoji extends Component {
    state={
        mainIcon:haha,
        subIcon:[angry,care,haha,like,love,sad]
    }
    OnpressIcon = (item)=>{
        this.setState({mainIcon:item})
    }
  render() {
      let {mainIcon,subIcon} = this.state;
    return (
      <View style={styles.container}>
         <View>
             <Text style={styles.tex}>Bạn Đang Cảm Thấy Thế Nào?</Text>
         </View>
         <View>
             <Image source={mainIcon} style={{width:200,height:200}}/>
         </View>
         <View style={styles.boxIcon}>
           {subIcon.map((item,key)=>{
               return (
                   <TouchableOpacity onPress={()=>{
                       this.OnpressIcon(item);
                   }}>     
                       <Image source={item}  style={styles.iconbtn}></Image>
                   </TouchableOpacity>
               )
           })}
           
         </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgb(242,242,242)',
        justifyContent:'center',
        alignItems:'center'
    },
    boxIcon:{
        flexDirection:'row',
       
    },
    tex:{
        marginVertical:10,
        fontWeight:'bold',
        fontSize:25,
        color:'black',
        textAlign:'center'
    },
    iconbtn:{
        marginVertical:20,
        marginHorizontal:5,
        width:50,
        height:50

    }
})
