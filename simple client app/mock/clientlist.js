import React from "react";
import { View, Text } from "react-native";

export default props => {
  return (
    <View clients={props}>
      <Text style={{ fontSize: 20 }}>{props.clientname}</Text>
      <Text>{props.clientemail}</Text>
      <Text>{props.pnumber}</Text>
      <Text>{props.address}</Text>
      <Text>{props.enquiry}</Text>
    </View>
  );
};
