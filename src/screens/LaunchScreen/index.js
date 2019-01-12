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
import Button from "../../components/Button";
import textStyles from "../../textStyles";

class App extends Component {
  static displayName = "App";

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#f4f2fb", alignItems: "center" }}
      >
        <View style={{ flex: 2, justifyContent: "center" }}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={{ height: 220, width: 220 }}
          />
        </View>
        <View>
          <Text style={textStyles.header}>Get Engaged</Text>
          <Text style={textStyles.caption}>Tan Tock Seng Hospital</Text>
        </View>
        <View style={{ width: WIDTH, flex: 1, marginVertical: 30 }}>
          <Button
            value="Login"
            textStyle={{ color: "#fff" }}
            containerStyle={{ backgroundColor: "#2F2844", marginBottom: 24 }}
            onPress={() => this.props.navigation.navigate("Login")}
          />
          <Button
            value="Register"
            containerStyle={{ borderWidth: 1, borderColor: "#2F2844" }}
            onPress={() => this.props.navigation.navigate("Register")}
          />
        </View>
        <Text style={textStyles.footerText}>VisionarySchoolmen</Text>
      </SafeAreaView>
    );
  }
}

App.propTypes = {};

export default App;
