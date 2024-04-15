import { Stack, router } from "expo-router";
import { Pressable, Text } from "react-native";
import HeaderBtn from "../components/common/HeaderBtn.tsx";
import { icons, images } from "../constants";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Bookings",
          headerTitleAlign: "center",
          headerLeft: () => (
            <HeaderBtn
              iconUrl={icons.add}
              dimension="60%"
              handlePress={() => router.push("/form")}
            />
          ),
          headerRight: () => (
            <HeaderBtn
              iconUrl={images.profile}
              dimension="60%"
              handlePress={() => router.push("/profile")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="details/[id]"
        options={({ route }) => ({
          title: `Booking ${route.params.id} Details`,
          headerTitleAlign: "center",
        })}
      />
      <Stack.Screen
        name="form"
        options={{
          title: "Create Booking",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen name="profile" options={{ title: "My Profile" }} />
    </Stack>
  );
};

export default RootLayout;
