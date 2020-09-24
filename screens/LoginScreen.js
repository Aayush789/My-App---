import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Keyboard, KeyboardAvoidingView, TextInput } from 'react-native';
import MyHeader from '../components/MyHeader';

import firebase from 'firebase';
import db from '../Config'

export default class LoginScreen extends Component{
    constructor(){
        super();
        this.state={
            userId: '',
            password:'',
        }
    }

    login= async(userId,password)=>{
        if(userId && password){
            try{
                const response= await firebase.auth().signInWithEmailAndPassword(userId, password)
                if(response){
                    this.props.navigation.navigate('HomeScreen')
                    alert('Login Successfully')
                }
            }

            catch(error){
                alert("invalid userId or password")
            }
        }

        else{
            alert('enter userId and password')
        }
    }

    render(){
        return(

            <KeyboardAvoidingView style= {{alignItems: 'center', marginTop: 20}}>
                  
                <View>
                <TextInput style={styles.name}
                placeholder= "User Name"
                placeHolderTextColor= "#ffff"
                onChangeText= {(text)=>{
                    this.setState({
                        userId:text
                    })
                }}/>

            <TextInput style={styles.loginBox}
                placeholder= "password"
                placeholderTextColor= "#ffff"
                secureTextEntry={true}
                onChangeText= {(text)=>{
                    this.setState({
                        password:text
                    })
                }}/> 

                <TouchableOpacity 
                style= {{height: 30, width: 90, borderWidth: 1, marginTop: 20, paddingTop: 5, borderRadius: 70}}
                onPress= {()=>{this.login(this.state.userId,this.state.password)}}>
                 <Text style= {{textAlign: 'center'}}>GO</Text>
                </TouchableOpacity>
                
                </View>

                </KeyboardAvoidingView>
            
        )
    }
}

const styles= StyleSheet.create({
    container: {
        flex:100,
        backgroundolor: '#f8be85',
        alignItems:'center',
        justifyContent:'center'
    },
   
    loginBox:{
        width:220,
        height: 40,
        marginTop: 180,
        borderBottomWidth: 1.5,
        borderColor: '#ff8a65',
        borderWidth: 1,
        fontSize:20,
        margin:10,
        paddingLeft:10,
    },

    name:{
        width:220,
        height: 40,
        marginTop: 250,
        borderColor: '#ff8a65',
        borderWidth: 1,
        fontSize:20,
        margin:10,
        paddingLeft:10,
    },

})




