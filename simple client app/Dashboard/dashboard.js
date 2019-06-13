import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
import AddClientScreen from "../screens/AddClientScreen";
import ViewClientScreen from "../screens/ViewScreen";
class HamburgerIcon extends Component {
  toggleDrawer = () => {
    //console.log(this.props.navigationProps);

    this.props.navigationProps.toggleDrawer();
  };

  render() {
    //console.log(this.props);
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={{
              uri:
                "https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png"
            }}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

class Custom_Side_Menu extends Component {
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        <Image
          source={require("../assets/girl.jpg")}
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
              View Client{" "}
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
        </View>
      </View>
    );
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: ViewClientScreen,
    navigationOptions: ({ navigation }) => ({
      title: "View Client",
      headerLeft: <HamburgerIcon navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: "#7b1fa2"
      },
      headerTintColor: "#fff"
    })
  }
});

const SecondActivity_StackNavigator = createStackNavigator({
  Second: {
    screen: AddClientScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Add Client",
      headerLeft: <HamburgerIcon navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: "#7b1fa2"
      },
      headerTintColor: "#fff"
    })
  }
});

const MyDrawerNavigator = createDrawerNavigator(
  {
    MainStack: {
      screen: FirstActivity_StackNavigator
    },

    SecondStack: {
      screen: SecondActivity_StackNavigator
    }
  },
  {
    contentComponent: Custom_Side_Menu,
    drawerWidth: Dimensions.get("window").width - 130
  }
);
const Dashboard = createAppContainer(MyDrawerNavigator);
export default Dashboard;

const styles = StyleSheet.create({
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
