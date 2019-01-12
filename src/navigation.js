import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LaunchScreen from "./screens/LaunchScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const AppNavigator = createStackNavigator({
  Launch: {
    screen: LaunchScreen
  },
  Login: {
    screen: LoginScreen
  },
  Register: {
    screen: RegisterScreen
  }
});

export default createAppContainer(AppNavigator);
