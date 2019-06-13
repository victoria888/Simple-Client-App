// Second screen which we will use to get the data
import React, { Component } from "react";
//import react in our code.
import { StyleSheet, View, Text, Image, Button } from "react-native";
//import all the components we are going to use.
//import Dashboard from "../Dashboard/dashboard";
class Details extends Component {
  static navigationOptions = {
    //Setting the header of the screen
    title: "Home",
    headerStyle: {
      backgroundColor: "#841584"
    },
    headerTintColor: "#fff"
  };
  render() {
    const { navigate } = this.props.navigation;
    const name = this.props.navigation.getParam("name");
    const email = this.props.navigation.getParam("email");
    const sex = this.props.navigation.getParam("sex");
    return (
      //View to hold our multiple components

      <View style={styles.container}>
        <Text style={{ fontSize: 26 }}>
          Welcome {name ? name : "No Value Passed"}
        </Text>
        <Text style={{ color: "#FFA023" }}>Signed in with {email}</Text>
        {sex == "female" ? (
          <Image
            source={require("../assets/pik.jpg")}
            style={styles.welcomeIcon}
          />
        ) : (
          <Image
            source={require("../assets/boyy.jpg")}
            style={styles.welcomeIcon}
          />
        )}

        <Button
          title="Get Started!"
          //Button Title
          color="#841584"
          onPress={() => navigate("Dashboard", { name }, { email })}
        />
        {/*Using the navigation prop we can get the value passed from the first Screen*/}
        {/*If you want to check the value is passed or not, you can use conditional operator.*/}
      </View>
    );
  }
}

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 50,
    alignItems: "center",
    justifyContent: "center"
  },

  welcomeIcon: {
    resizeMode: "center",
    width: 300,
    height: 300,
    borderRadius: 150 / 2
  },
  TextStyle: {
    fontSize: 23,
    textAlign: "center",
    color: "#f00"
  }
});
