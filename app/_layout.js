import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="details/[id]" />
      <Stack.Screen name="form" />
      <Stack.Screen name="profile" />
    </Stack>
  );
};

export default RootLayout;
