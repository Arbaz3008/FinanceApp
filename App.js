import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DashboardScreen from './screens/Dashboard';
import ExpenseScreen from './screens/Expense';
import BudgetScreen from './screens/Budget';
import HistoryScreen from './screens/History';
import AccountLinkScreen from './screens/AccountLink';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Expense" component={ExpenseScreen} />
        <Stack.Screen name="Budget" component={BudgetScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="AccountLink" component={AccountLinkScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
