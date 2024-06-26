import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
const Task18 = () => {
  const [isLoading , isLoadingstate] = useState(true);
  const name = "Wesam";
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      isLoadingstate(false);
    }, 3000)
    return () => clearTimeout(timeoutId);
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1, justifyContent: 'center', alignItems: 'center',
    },
    loadingText: {
     marginTop: 10,
     },
    nameText: {
      fontSize: 20,
    },
  });
  
  return(
    <View style = {styles.container}>
  {
    isLoading ? (<><ActivityIndicator size = 'large' color = 'red' />
    <Text style = {styles.loadingText}>loading...</Text></>):(<Text style = {styles.nameText}>{name}</Text>)
  }
  </View>
  );
};
export default Task18;