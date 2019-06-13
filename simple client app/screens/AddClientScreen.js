import React, { Component } from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  YellowBox,
  Picker,
  Button
} from "react-native";
import clients from "../mock/clients";

export default class AddClientScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientname: "",
      clientemail: "",
      pnumber: "",
      sex: "",
      address: "",
      enquiry: ""
    };

    YellowBox.ignoreWarnings([
      "Warning: componentWillMount is deprecated",
      "Warning: componentWillReceiveProps is deprecated"
    ]);
  }
  componentWillUnmount() {
    this.setState({
      clientname: null,
      clientemail: null,
      pnumber: null,
      sex: null,
      address: null,
      enquiry: null
    });
  }
  onSubmit = () => {
    const data = {
      ...this.state
    };
    lastId = clients[clients.length - 1].id + 1;
    data.id = lastId;
    clients.push(data);
    return this.props.navigation.navigate("First", clients);
  };

  render() {
    //const { navigate } = this.props.navigation;

    return (
      <KeyboardAvoidingView
        style={styles.MainContainer}
        behavior="padding"
        enabled
      >
        {/* <ImageBackground
          source={require("../assets/bgclient.jpg")}
          style={{ width: "100%", height: "100%" }}
        > */}
        <View style={styles.textbox}>
          <TextInput
            style={styles.input}
            value={this.state.clientname}
            onChangeText={clientname => this.setState({ clientname })}
            placeholder={"Full Name"}
            autoFocus={true}
            autoCorrect={true}
            keyboardType="default"
            returnKeyType="next"
            blurOnSubmit={false}
            placeholderTextColor="#fff"
          />

          <TextInput
            style={styles.input}
            value={this.state.clientemail}
            onChangeText={clientemail => this.setState({ clientemail })}
            placeholder="email@example.com"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            blurOnSubmit={false}
            placeholderTextColor="#fff"
          />

          <TextInput
            style={styles.input}
            value={this.state.pnumber}
            onChangeText={pnumber => this.setState({ pnumber })}
            placeholder="Phone Number"
            autoCorrect={false}
            keyboardType="number-pad"
            returnKeyLabel="next"
            blurOnSubmit={false}
            placeholderTextColor="#fff"
          />

          <Picker
            selectedValue={this.state.sex}
            style={{ height: 50, width: 100, color: "#fff" }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ sex: itemValue })
            }
          >
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
          </Picker>

          <TextInput
            style={styles.input}
            value={this.state.address}
            onChangeText={address => this.setState({ address })}
            placeholder="Contact Address"
            autoCorrect={false}
            keyboardType="default"
            returnKeyLabel="next"
            blurOnSubmit={false}
            placeholderTextColor="#fff"
          />

          <TextInput
            style={styles.input}
            value={this.state.enquiry}
            placeholderTextColor="#fff"
            onChangeText={enquiry => this.setState({ enquiry })}
            placeholder="Place your enquiry"
            autoCorrect={false}
            keyboardType="default"
            returnKeyType="next"
            blurOnSubmit={true}
          />
        </View>
        <Button title="ADD CLIENT" color="#841584" onPress={this.onSubmit} />
        {/* </ImageBackground> */}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    //paddingTop: Platform.OS === "ios" ? 20 : 0,
    flex: 1,
    backgroundColor: "#000000",
    color: "#ffffff",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  textbox: {
    flex: 1,
    //justifyContent: "center",
    marginBottom: 20
  },
  input: {
    //flex: 1,
    //borderWidth: 1,

    //backgroundColor: "#f0f8ff",
    // opacity: 0,
    //borderRadius: 4,
    //justifyContent: "center",
    //margin: 10,
    //color: "#000000",
    //marginBottom: 0,
    height: 30,
    paddingHorizontal: 10,
    borderBottomEndRadius: 4,
    fontSize: 16,
    color: "#fff",
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: "#841584",
    justifyContent: "center",
    margin: 20,
    marginBottom: 0
    //height: 34,
    // paddingHorizontal: 10,
    //borderBottomEndRadius: 4,
    //fontSize: 16
  }
});
