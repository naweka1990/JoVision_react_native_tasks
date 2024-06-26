import React, { useState } from 'react';
import { View, Button, Text, StyleSheet} from 'react-native';
import Myclass from './class_Task 19';
const Task19 = () => {
    const [b,b_inuse] = useState(false)
    const fun = () => {
        b_inuse(!b)
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
export default Task19;