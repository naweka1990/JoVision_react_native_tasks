import React, { Component, useState } from 'react';
import { View, Button, Text, StyleSheet} from 'react-native';
class Myclass extends Component
{
    render() {
        return(
            <View style = {style.text}><Text>these are my insides</Text></View>
        )
    }
}
const style = StyleSheet.create({
    button : 
    {
        flex: 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    text: 
    {
       marginTop: 20,
       fontSize: 20,
    }})
    export default Myclass;