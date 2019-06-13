// First screen which we will use to send the data
import React, { Component } from "react";
//import react in our code.
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Picker
} from "react-native";
//import all the components we are going to use.

export default class Home extends Component {
  constructor(props) {
    //constructor to set default state
    super(props);
    this.state = {
      name: "",
      email: "",
      sex: ""
    };
  }
  static navigationOptions = {
    //Setting the header of the screen
    title: "Welcome To Client Base",
    headerTransparent: true,
    headerTintColor: "#841584"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      //View to hold our multiple components
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={{ width: 380, height: 100 }}>
          {/*Input to get the value from the user*/}
          <TextInput
            style={styles.input}
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            placeholder={"Full Name"}
            autoFocus={true}
            autoCorrect={true}
            keyboardType="default"
            returnKeyType="next"
            blurOnSubmit={false}
          />
        </View>
        <View style={{ width: 380, height: 100 }}>
          <TextInput
            style={styles.input}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="email@example.com"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            blurOnSubmit={true}
          />
        </View>
        <View style={{ width: 380, height: 100 }}>
          <Picker
            style={{
              flex: 1,
              justifyContent: "center",
              height: 50,
              width: 100,
              color: "#fff",
              borderWidth: 2,
              borderBottomColor: "#841584",
              borderBottomEndRadius: 4
            }}
            selectedValue={this.state.sex}
            mode="dropdown"
            //style={styles.pickerbox}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ sex: itemValue })
            }
          >
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
          </Picker>
        </View>
        {/*Button to go to the next activity*/}
        <View style={{ width: 380, height: 150 }}>
          <Button
            title="Sign Up"
            //Button Title
            color="#841584"
            onPress={() =>
              navigate("Details", {
                name: this.state.name,
                email: this.state.email,
                sex: this.state.sex
              })
            }
            //On click of the button we will send the data as a Json from here to the Second Screen using navigation prop
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    color: "#fff",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  input: {
    color: "#fff",
    flex: 1,
    borderWidth: 2,
    borderBottomColor: "#841584",
    justifyContent: "center",
    margin: 20,
    marginBottom: 0,
    height: 34,
    paddingHorizontal: 10,
    borderBottomEndRadius: 4,
    fontSize: 16
  }
});
