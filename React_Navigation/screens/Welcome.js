import React from "react";
import { Text, View } from "react-native";
import Header from "./Header";
export default function Welcome({navigation}) {
  return (
    <View>
        <Header title="Home" navigation={navigation} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          marginTop: 280,
        }}
      >
        <Text>Welcome :)</Text>
      </View>
    </View>
  );
}
