import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-navigation";
import textStyles from "../../textStyles";
import Textbox from "../../components/Textbox";
import Picker from "../../components/Dropdown/dropdown";
import testHOC from "../../HOC/testHOC";

const data = [
  {
    text: "Select Gender",
    value: ""
  },
  {
    text: "Male",
    value: "male"
  },
  {
    text: "Female",
    value: "female"
  },
  {
    text: "Third Gender",
    value: "thirdGender"
  }
];

class index extends Component {
  static propTypes = {};

  state = {
    value: ""
  };

  static navigationOptions = () => ({
    headerTintColor: "#fff",
    headerTransparent: true
  });

  test() {
    console.log("text");
  }

  render() {
    console.warn("language", this.props.language);
    console.warn("this.props.userID", this.props.userID);
    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "never" }}>
        <View
          style={{
            height: 150 + StatusbarHeight,
            backgroundColor: "#2e2743",
            justifyContent: "flex-end",
            alignItems: "flex-start"
          }}
        >
          <Text style={[textStyles.header, { color: "#fff", padding: 20 }]}>
            Register
          </Text>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <Textbox
            label="Name"
            value="Yagnesh"
            onChangeText={() => {}}
            placeholder="Name"
          />
          <Textbox
            label="Password"
            value="Yagnesh"
            onChangeText={() => {}}
            placeholder="Password"
            secureTextEntry
          />
          <Picker
            data={data}
            label="Gender"
            value={this.state.value}
            onChange={(name, value) => this.setState({ value })}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default testHOC(index);
