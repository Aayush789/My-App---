import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

class MyHeader extends React.Component{
    render(){
      return(
        <View style = {styles.textConatiner}>

        <Image
          source= {require("../assets/window.jpg")}
          style= {{width:160, height:160, alignItems: 'center', justifyContent:'center'}}
        />
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    textConatiner:{
      backgroundColor:'#fff',
      marginLeft: 65,
      marginTop: 130,
    },
  })
  export default MyHeader;