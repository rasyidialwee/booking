import { router } from "expo-router";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import PrimaryButton from "../components/common/PrimaryBtn";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/common/Card";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

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
      {/* <Text>booking</Text> */}
      <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
        {bookings.map((booking, index) => (
          <Card key={index} id={booking.bookingid} />
        ))}

        {/* {data.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))} */}
        {/* <PrimaryButton title="Refresh Data" handlePress={fetchData} /> */}
      </View>

      {/* <PrimaryButton
        title="Book Now"
        handlePress={() => router.push("/form")}
      />
      <Pressable onPress={() => router.push("/details/1")}>
        <Text>details</Text>
      </Pressable>
      <Pressable onPress={() => router.push("/form")}>
        <Text>Form</Text>
      </Pressable>
      <Pressable onPress={() => router.push("/profile")}>
        <Text>profile</Text>
      </Pressable> */}
    </SafeAreaView>
  );
};

export default Bookings;
