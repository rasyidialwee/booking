import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import PrimaryBtn from "../components/common/PrimaryBtn";
import axios from "axios";
import { router } from "expo-router";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "Rasyidi",
    lastName: "Alwee",
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
          depositpaid: formData.depositPaid,
          bookingdates: {
            checkin: formData.checkInDate,
            checkout: formData.checkOutDate,
          },
          additionalneeds: formData.additionalNeeds,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log("success", response.data);
        router.push("profile");
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

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>Depost Paid</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={formData.depositPaid ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => handleChange("depositPaid", value)}
          value={formData.depositPaid}
        />
      </View>

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
