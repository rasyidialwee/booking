import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import PrimaryButton from "../components/common/PrimaryBtn";

const Bookings = () => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
      }}
    >
      <Text>booking</Text>
      <PrimaryButton
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
      </Pressable>
    </View>
  );
};

export default Bookings;
