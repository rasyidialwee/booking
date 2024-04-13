import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

const Bookings = () => {
  return (
    <View>
      <Text>booking</Text>
      <Pressable onPress={() => router.push("/details/1")}>
        <Text>details</Text>
      </Pressable>
      <Pressable onPress={() => router.push("/form")}>
        <Text>Form</Text>
      </Pressable>
      <Pressable onPress={() => router.push("/profile")}>
        <Text>profile</Text>
      </Pressable>
    </View>
  );
};

export default Bookings;
