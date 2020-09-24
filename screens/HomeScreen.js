import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import MyHeader from '../components/MyHeader';
import firebase from 'firebase';

export default class HomeScreen extends Component{
    render(){
        return(
            <View style= {{flex: 1, justigyContent: 'center',alignItems: 'center'}}>
                <Text>Home Screen</Text>
            </View>
        )
    }
} 

