import React, { useState } from 'react';
import { View, Button, Text, StyleSheet} from 'react-native';
import Myclass from './class_Task 20';
const Task20 = () => {
    const [b,b_inuse] = useState(false)
    let i;
    const fun = () => {
        b_inuse(!b)
        if (b)
        {
            i = 'loaded';
        }
        else
        {
            i = 'unloaded';
        }
        console.log(i)
        }

    return(
        <View style = {style.button}>
        <Button title={!b?'show my insides':'hide my insides'} onPress={fun}/>
        {b && <Myclass />}{}
        </View>)
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
    },
})
export default Task20;