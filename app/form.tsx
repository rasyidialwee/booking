import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import PrimaryBtn from "../components/common/PrimaryBtn";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [depositPaid, setDepositPaid] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [additionalNeeds, setAdditionalNeeds] = useState("");

  const submit = () => {
    console.log("submit");
  };

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 10,
        paddingVertical: 5,
      }}
    >
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />

      <TextInput
        style={styles.input}
        placeholder="Check In Date"
        value={checkInDate}
        onChangeText={setCheckInDate}
      />

      <TextInput
        style={styles.input}
        placeholder="Check Out Date"
        value={checkOutDate}
        onChangeText={setCheckOutDate}
      />

      <TextInput
        style={styles.input}
        placeholder="Total Price"
        keyboardType="numeric"
        value={totalPrice}
        onChangeText={setTotalPrice}
      />

      <TextInput
        style={styles.input}
        placeholder="Deposit Paid"
        keyboardType="numeric"
        value={depositPaid}
        onChangeText={setDepositPaid}
      />

      <TextInput
        style={styles.input}
        placeholder="Additional Needs"
        value={additionalNeeds}
        onChangeText={setAdditionalNeeds}
      />
      <PrimaryBtn title="Submit" handlePress={submit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Form;
