import { useLocalSearchParams } from "expo-router";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

const Details = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    fetchBooking();
  }, []);

  const fetchBooking = async () => {
    try {
      const response = await axios.get(
        `https://restful-booker.herokuapp.com/booking/${id}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      console.log(response.data);

      setBooking(response.data);
    } catch (error) {
      console.log(JSON.stringify(error));
      setBooking;

      // setBooking(JSON.stringify(error));
    }
  };
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 10,
        paddingVertical: 5,
      }}
    >
      <View style={styles.card}>
        <Text>{booking?.firstname}</Text>
        <Text>{booking?.lastname}</Text>
        <Text>{booking?.totalprice}</Text>
        <Text>{booking?.depositpaid ? "yes" : "no"}</Text>
        <Text>{booking?.bookingdates.checkin}</Text>
        <Text>{booking?.bookingdates.checkout}</Text>
        <Text>{booking?.additionalneeds}</Text>
      </View>
    </SafeAreaView>
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

export default Details;
