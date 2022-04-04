import React from "react";
import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const RecentExpensesScreen = () => {
  return <ExpensesOutput expenses={[]} expensesPeriod={"Last 7 Days"} />;
};

const styles = StyleSheet.create({});

export default RecentExpensesScreen;
