import React from "react";
import { Pressable, Text } from "react-native";

import styles from "./primaryBtn.style";

const PrimaryBtn = ({ handlePress, title }) => {
  return (
    <Pressable onPress={handlePress} style={styles.btnPrimary}>
      <Text style={styles.btnText}>{title}</Text>
    </Pressable>
  );
};

export default PrimaryBtn;
