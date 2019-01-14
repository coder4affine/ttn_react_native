import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LaunchScreen from "./screens/LaunchScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ListView from "./screens/ListView";

const AppNavigator = createStackNavigator({
  Launch: {
    screen: LaunchScreen
  },
  Login: {
    screen: LoginScreen
  },
  Register: {
    screen: RegisterScreen
  },
  ListView: {
    screen: ListView
  }
});

export default createAppContainer(AppNavigator);
