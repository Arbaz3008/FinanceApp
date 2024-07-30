import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BudgetScreen = () => {
  const [budgets, setBudgets] = useState({});
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const loadBudgets = async () => {
      const storedBudgets = await AsyncStorage.getItem('budgets');
      setBudgets(storedBudgets ? JSON.parse(storedBudgets) : {});
    };
    loadBudgets();
  }, []);

  const saveBudget = async () => {
    const newBudgets = { ...budgets, [category]: amount };
    setBudgets(newBudgets);
    await AsyncStorage.setItem('budgets', JSON.stringify(newBudgets));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Budgets</Text>
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
      <TouchableOpacity style={styles.button} onPress={saveBudget}>
        <Text style={styles.buttonText}>Save Budget</Text>
      </TouchableOpacity>
      {Object.keys(budgets).map((cat) => (
        <Text key={cat}>{cat}: ${budgets[cat]}</Text>
      ))}
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
    
    export default BudgetScreen;
    