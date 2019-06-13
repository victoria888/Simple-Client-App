import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

//import Navigator in our project

import Home from "./test/home";
import Details from "./test/details";
import Dashboard from "./Dashboard/dashboard";
//import all the screens we are going to switch

const App = createStackNavigator(
  {
    //Constant which holds all the screens like index of any book
    Home: { screen: Home },
    //First entry by default be our first screen
    //if we do not define initialRouteName
    Details: { screen: Details },

    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(App);
