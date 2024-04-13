import { router } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const Card = ({ id }: { id: string }) => {
  return (
    <View style={styles.card}>
      <Pressable onPress={() => router.push(`/details/${id}`)}>
        <Text style={styles.text}>{id}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    elevation: 5, // For Android
    shadowColor: "#000", // For iOS
    shadowOffset: { width: 0, height: 2 }, // For iOS
    shadowOpacity: 0.25, // For iOS
    shadowRadius: 3.84, // For iOS
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Card;
