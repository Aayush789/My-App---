import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import MyHeader from '../components/MyHeader';

import firebase from 'firebase';

export default class InventoryScreen extends Component{
    render(){
        return(
            <View style= {{flex: 1, justigyContent: 'center',alignItems: 'center'}}>
                <Text>Inventory Screen</Text>
            </View>
        )
    }
} 