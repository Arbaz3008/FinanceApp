import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ExpenseScreen = ({ navigation }) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');

  const saveExpense = async () => {
    const expense = { category, amount, note, date: new Date().toISOString() };
    let expenses = await AsyncStorage.getItem('expenses');
    expenses = expenses ? JSON.parse(expenses) : [];
    expenses.push(expense);
    await AsyncStorage.setItem('expenses', JSON.stringify(expenses));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Expense</Text>
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Note"
        value={note}
        onChangeText={setNote}
      />
      <TouchableOpacity style={styles.button} onPress={saveExpense}>
        <Text style={styles.buttonText}>Save</Text>
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
    input: {
      width: '100%',
      padding: 8,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: '#ccc',
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
    
    export default ExpenseScreen;
    