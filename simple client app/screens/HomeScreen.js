import React, { Component } from "react";
import { View, Text, Image } from "react-native";
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.props.navigation);
    // const name = this.props.navigation.getParam("name");
    //const email = this.props.navigation.getParam("email");
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}>
          {" "}
          Welcome! hi {name} {email}
        </Text>
        <Image source={require("./imgs/pik.jpg")} style={styles.welcomeIcon} />
      </View>
    );
  }
}
