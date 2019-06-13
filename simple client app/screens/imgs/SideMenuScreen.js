import React, { Component } from "react";
import { View, Image, Text, StyleSheet, Platform } from "react-native";
export default class SideMenuScreen extends Component {
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        <Image
          source={require("./imgs/girl.jpg")}
          style={styles.sideMenuProfileIcon}
        />

        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#e2e2e2",
            marginTop: 15
          }}
        />

        <View style={{ width: "100%" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10
            }}
          >
            <Image
              source={{
                uri:
                  "https://reactnativecode.com/wp-content/uploads/2018/08/social.jpg"
              }}
              style={styles.sideMenuIcon}
            />

            <Text
              style={styles.menuText}
              onPress={() => {
                this.props.navigation.navigate("First");
              }}
            >
              {" "}
              Home{" "}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10
            }}
          >
            <Image
              source={{
                uri:
                  "https://reactnativecode.com/wp-content/uploads/2018/08/promotions.jpg"
              }}
              style={styles.sideMenuIcon}
            />

            <Text
              style={styles.menuText}
              onPress={() => {
                this.props.navigation.navigate("Second");
              }}
            >
              {" "}
              Add Client{" "}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10
            }}
          >
            <Image
              source={{
                uri:
                  "https://reactnativecode.com/wp-content/uploads/2018/08/outbox.jpg"
              }}
              style={styles.sideMenuIcon}
            />

            <Text
              style={styles.menuText}
              onPress={() => {
                this.props.navigation.navigate("Third");
              }}
            >
              {" "}
              Vview List{" "}
            </Text>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "#e2e2e2",
            marginTop: 15
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    alignItems: "center",
    justifyContent: "center"
  },

  sideMenuContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20
  },
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 150,
    height: 150,
    borderRadius: 150 / 2
  },

  sideMenuIcon: {
    resizeMode: "center",
    width: 28,
    height: 28,
    marginRight: 10,
    marginLeft: 20
  },

  menuText: {
    fontSize: 15,
    color: "#222222"
  }
});
