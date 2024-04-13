import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import PrimaryBtn from "../components/common/PrimaryBtn";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    totalPrice: "",
    depositPaid: "",
    checkInDate: "",
    checkOutDate: "",
    additionalNeeds: "",
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const submit = () => {
    console.log("submit");
    axios
      .post(
        "https://restful-booker.herokuapp.com/booking",
        {
          firstname: formData.firstName,
          lastname: formData.lastName,
          totalprice: formData.totalPrice,
          depositpaid: true,
          bookingdates: {
            checkin: formData.checkInDate,
            checkout: formData.checkOutDate,
          },
          additionalneeds: formData.additionalNeeds,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
        value={formData.firstName}
        onChangeText={(text) => handleChange("firstName", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={formData.lastName}
        onChangeText={(text) => handleChange("lastName", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Check In Date"
        value={formData.checkInDate}
        onChangeText={(text) => handleChange("checkInDate", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Check Out Date"
        value={formData.checkOutDate}
        onChangeText={(text) => handleChange("checkOutDate", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Total Price"
        keyboardType="numeric"
        value={formData.totalPrice}
        onChangeText={(text) => handleChange("totalPrice", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Deposit Paid"
        keyboardType="numeric"
        value={formData.depositPaid}
        onChangeText={(text) => handleChange("depositPaid", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Additional Needs"
        value={formData.additionalNeeds}
        onChangeText={(text) => handleChange("additionalNeeds", text)}
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
