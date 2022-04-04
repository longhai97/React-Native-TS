import React from "react";
import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

type Props = {
  expenses: string[];
  expensesPeriod: string;
};

export type IDummyData = {
  id: string;
  description: string;
  amount: number;
  date: Date;
};

const DUMMY_EXPENSES: IDummyData[] = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 69.99,
    date: new Date("2022-01-19"),
  },
  {
    id: "e3",
    description: "Some Bananas",
    amount: 4.99,
    date: new Date("2021-06-05"),
  },
  {
    id: "e4",
    description: "A Book",
    amount: 10.49,
    date: new Date("2022-02-19"),
  },
  {
    id: "e5",
    description: "A Macbook",
    amount: 289.88,
    date: new Date("2023-6-20"),
  },
];

export default function ExpensesOutput({ expenses, expensesPeriod }: Props) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
