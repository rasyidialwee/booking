import { Text, SafeAreaView, Image, View } from "react-native";
import { images } from "../constants";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/common/Card";
const Profile = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://restful-booker.herokuapp.com/booking?firstname=Rasyidi&lastname=Alwee"
      );
      console.log(response.data);

      setBookings(response.data);
    } catch (error) {
      setBookings(error.message);
    }
  };

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Image
          source={images.profile} // replace with your image url
          style={{
            width: 100,
            height: 100,
            borderRadius: 50, // half of width and height to make image round
            marginBottom: 10, // space between image and text
          }}
        />
        <Text>Rasyidi Alwee</Text>
      </View>

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 1,
          width: "100%", // Full width
          marginVertical: 10, // 10px space between this and next element
        }}
      />
      <View>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>My Booking</Text>

        <View style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
          {bookings.map((booking, index) => (
            <Card key={index} id={booking.bookingid} />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
