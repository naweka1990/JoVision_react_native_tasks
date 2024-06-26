import React, { useState } from 'react';
import { View, Button, Text, StyleSheet} from 'react-native';

const Task17 = () => {
  const [v1,v2] = useState(false);
  const name = "Wesam";
  const v4 = () => {
    v2(!v1);
  };

  return (
    <View style = {styles.button}>
    <Button title = {v1 ? "hide" : "show"} onPress = {v4} />
    {v1 && <Text style = {styles.text}>{name}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 20,
  },
});

export default Task17;