import React, { Component } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import {} from "react-navigation";
class BurgerIcon extends Component {
  toggleDrawer = () => {
    toggleDrawer = () => {
      console.log(this.props.navigationProps);

      this.props.navigationProps.toggleDrawer();
    };
  };

  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require("./imgs/hamburger_icon.png")}
            style={styles.imgicon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
export default BurgerIcon;

const styles = StyleSheet.create({
  imgicon: {
    width: 25,
    height: 25,
    marginLeft: 5
  }
});
