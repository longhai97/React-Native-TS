import React from "react";
import { Animated, RegisteredStyle, StatusBar, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ManageExpense from "./src/screens/ManageExpense";
import RecentExpenses from "./src/screens/RecentExpenses";
import AllExpenses from "./src/screens/AllExpenses";
import { GlobalStyles } from "./src/constants/styles";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}
    >
      <BottomTabs.Screen
        name={"RecentExpenses"}
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={23} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name={"AllExpenses"}
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Icon name="rocket" size={30} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

const App = () => {
  return (
    <>
      <StatusBar barStyle={"default"} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={"ExpensesOverview"}
            component={ExpensesOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen name={"ManageExpense"} component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
