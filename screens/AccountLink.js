import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AccountLinkScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Link Account</Text>
      {/* Implement account linking logic here */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Link Account</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      marginBottom: 16,
    },
    button: {
      backgroundColor: '#2196F3',
      padding: 10,
      marginVertical: 5,
      width: '80%',
      alignItems: 'center',
      borderRadius: 5,
    },
    buttonText: {
  
  
      color: 'white',
      fontSize: 18,
    },
  });
  
  export default AccountLinkScreen;
  