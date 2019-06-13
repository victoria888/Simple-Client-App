import React, { Component } from "react";
import {
  View,
  StatusBar,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Button,
  StyleSheet
} from "react-native";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
  }
  static navigationOptions = {
    header: null
  };

  onPress = () => {
    this.props.navigation.navigate("HomeScreen", {
      email: this.state.email,
      name: this.state.name
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <StatusBar barStyle="light-content" />
        <View style={{ width: 380, height: 50 }}>
          <Text style={styles.textheader}>
            Welcome <Text style={{ color: "#841584" }}>Cheecodess</Text>
          </Text>
        </View>

        <View style={{ width: 380, height: 100 }}>
          <TextInput
            style={styles.textbox}
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            placeholder="Full Name"
            autoFocus={true}
            autoCorrect={true}
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={this._next}
            blurOnSubmit={false}
          />
        </View>
        <View style={{ width: 380, height: 100 }}>
          <TextInput
            style={styles.textbox}
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
        <View style={{ width: 380, height: 150 }}>
          <Button
            title="SIGN UP"
            color="#841584"
            onPress={this.onPress}
            onSubmitEditing={this.onPress}
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
    //alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    alignItems: "center",
    justifyContent: "center"
  },

  navbar: {
    flex: 1,
    width: 150,
    height: 100,
    backgroundColor: "cyan"
  },
  textheader: {
    color: "#fff",
    fontSize: 20,
    paddingTop: 20 + Constants.statusBarHeight,
    padding: 20
  },
  textbox: {
    color: "#fff",
    flex: 1,
    borderWidth: 2,
    borderBottomColor: "#841584",
    //alignItems: "center",
    justifyContent: "center",
    margin: 20,
    marginBottom: 0,
    height: 34,
    paddingHorizontal: 10,
    borderBottomEndRadius: 4,
    fontSize: 16
  }
});
