import React, { useState } from 'react';
import { View, Button, Text, StyleSheet} from 'react-native';

const App = () => {
  const [v2,v1] = useState(false);
  const v3 = "Wesam";
  const v4 = () => {
    v1(!v2);
  };

  return (
    <View style = {styles.button}>
    <Button title = "show" onPress = {v4} />
    {v2 && <Text style = {styles.text}>{v3}</Text>}
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

export default App;
