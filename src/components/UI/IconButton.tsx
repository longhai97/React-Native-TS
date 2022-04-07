import { View, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";

type IIconButton = {
  icon: string,
  size: number,
  color: string | undefined,
  onPress: () => void;
};

const IconButton = (props: IIconButton) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <Icon name={props.icon} size={props.size} color={props.color} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    margin: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default IconButton;
