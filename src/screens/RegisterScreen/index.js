import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";
import * as Keychain from "react-native-keychain";
import { SafeAreaView } from "react-navigation";
import textStyles from "../../textStyles";
import Textbox from "../../components/Textbox";
import Picker from "../../components/Dropdown/dropdown";
import testHOC from "../../HOC/testHOC";
import Form from "./registrationForm";

class index extends PureComponent {
  static propTypes = {};

  state = {
    form: {
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    token: ""
  };

  static navigationOptions = () => ({
    headerTintColor: "#fff",
    headerTransparent: true
  });

  static getDerivedStateFromProps(nextProps, prevState) {}

  constructor(props) {
    super(props);

    Keychain.getGenericPassword().then(data => {
      console.warn(data);
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  submit = async value => {
    const username = "zuck";
    const password = "poniesRgr8";

    // Store the credentials
    await Keychain.setGenericPassword(username, password);
  };

  render() {
    console.warn("language", this.props.language);
    console.warn("this.props.userID", this.props.userID);

    let kav = {};
    if (OS === "ios") {
      kav = {
        behavior: "padding",
        enabled: true
      };
    }

    if (this.state.token) {
      return (
        <View>
          <Text>{`I have a token  ${this.state.token}`}</Text>
        </View>
      );
    }
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
        <KeyboardAvoidingView style={{ flex: 1 }} {...kav}>
          <ScrollView style={{ flex: 1 }}>
            <Form initialValues={this.state.form} onSubmit={this.submit} />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default index;
