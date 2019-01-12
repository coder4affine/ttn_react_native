import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Platform
} from "react-native";
import Button from "./src/components/Button";

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f4f2fb" }}>
        <Image
          source={require("./src/assets/images/logo.png")}
          style={{ height: 220, width: 220 }}
        />
        <Text>Get Engaged</Text>
        <Text>Tan Tock Seng Hospital</Text>
        <Button
          value="Login"
          textStyle={{ color: "#fff" }}
          containerStyle={{ backgroundColor: "#2F2844" }}
        />
        <Button
          value="Active"
          containerStyle={{ borderWidth: 1, borderColor: "#2F2844" }}
        />
      </SafeAreaView>
    );
  }
}

App.propTypes = {};

export default App;
