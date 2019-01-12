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
import { ThemeConsumer } from "../../contextAPI/themeContext";
import testHOC from "../../HOC/testHOC";

class App extends Component {
  static displayName = "App";

  static navigationOptions = () => ({
    header: null,
    headerBackTitle: "Launch"
  });

  constructor(props) {
    super(props);
    props.changeLanguage("en");
  }

  test() {
    console.log("text");
  }

  render() {
    const { language } = this.props;
    console.warn("language", language);
    console.warn("this.props.userID", this.props.userID);
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#f4f2fb", alignItems: "center" }}
      >
        <ThemeConsumer>
          {value => (
            <View>
              <Text>{value.theme}</Text>
              <Button
                value="Change Theme"
                onPress={() => value.changeTheme("dark")}
              />
            </View>
          )}
        </ThemeConsumer>
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

export default testHOC(App);
