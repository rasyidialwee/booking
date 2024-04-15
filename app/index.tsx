import { router } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import PrimaryButton from "../components/common/PrimaryBtn";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/common/Card";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const searchFunction = async (text) => {
    try {
      const response = await axios.get(
        "https://restful-booker.herokuapp.com/booking?firstname=" + text
      );
      const limitData = response.data.slice(0, 10);
      setBookings(limitData);
      // setBookings(response.data);
    } catch (error) {
      setBookings(error.message);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://restful-booker.herokuapp.com/booking"
      );
      const limitData = response.data.slice(0, 10);
      setBookings(limitData);
      // setBookings(response.data);
    } catch (error) {
      setBookings(error.message);
    }
  };

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 10,
        paddingVertical: 5,
      }}
    >
      <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
        <TextInput
          style={styles.input}
          placeholder="Search by First Name"
          value={search}
          onChangeText={searchFunction}
        />

        {bookings.map((booking, index) => (
          <Card key={index} id={booking.bookingid} />
        ))}
      </View>
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

export default Bookings;
