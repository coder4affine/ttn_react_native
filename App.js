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
import AppContainer from "./src/navigation";

class App extends Component {
  static displayName = "App";

  render() {
    return <AppContainer />;
  }
}

App.propTypes = {};

export default App;
