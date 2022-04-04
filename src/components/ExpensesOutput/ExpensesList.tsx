import React from "react";
import {FlatList} from "react-native";
import ExpenseItem from "./ExpenseItem";

type Props = {
    expenses: readonly any[] | null | undefined;
};

const renderExpenseItem = (itemData: any) => {
    return <ExpenseItem {...itemData.item}/>
};

export default function ExpensesList({expenses}: Props) {
    return (
        <FlatList
            data={expenses}
            renderItem={renderExpenseItem}
            keyExtractor={item => item.id}
        />
    );
}
