import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const Details = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>details - {id}</Text>
    </View>
  );
};

export default Details;
