import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image,
  Animated,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";

import { SafeAreaView } from "react-navigation";
import Button from "../../components/Button";
import TextInput from "../../components/Textbox";
import textStyles from "../../textStyles";

export default class index extends Component {
  static propTypes = {};

  static navigationOptions = () => ({
    headerTintColor: "#000",
    headerTransparent: true
  });

  constructor(props) {
    super(props);
    this.keyboardHeight = new Animated.Value(0);
    this.xyz = new Animated.Value(0);
  }

  componentDidMount() {
    if (OS === "ios") {
      this.keyboardWillShowListener = Keyboard.addListener(
        "keyboardWillShow",
        this.keyboardShow
      );
      this.keyboardWillHideListener = Keyboard.addListener(
        "keyboardWillHide",
        this.keyboardHide
      );
    } else {
      this.keyboardDidShowListener = Keyboard.addListener(
        "keyboardDidShow",
        this.keyboardShow
      );
      this.keyboardDidHideListener = Keyboard.addListener(
        "keyboardDidHide",
        this.keyboardHide
      );
    }
  }

  componentWillUnmount = () => {
    if (OS === "ios") {
      this.keyboardWillShowListener.remove();
      this.keyboardWillHideListener.remove();
    } else {
      this.keyboardDidShowListener.remove();
      this.keyboardDidHideListener.remove();
    }
  };

  keyboardShow = e => {
    Animated.timing(this.keyboardHeight, {
      duration: OS === "ios" ? e.duration : 250,
      toValue: 1
    }).start();
  };

  keyboardHide = e => {
    Animated.spring(this.keyboardHeight, {
      duration: OS === "ios" ? e.duration : 250,
      toValue: 0
    }).start();
  };

  render() {
    const translateX = this.keyboardHeight.interpolate({
      inputRange: [0, 1],
      outputRange: [WIDTH / 2 - 100, -60],
      extrapolate: "clamp"
    });

    const translateY = this.keyboardHeight.interpolate({
      inputRange: [0, 1],
      outputRange: [60, -15 + (isIphoneX ? StatusbarHeight : 0)],
      extrapolate: "clamp"
    });

    const scale = this.keyboardHeight.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.3],
      extrapolate: "clamp"
    });

    const translateYText = this.keyboardHeight.interpolate({
      inputRange: [0, 1],
      outputRange: [300, 65 + (isIphoneX ? StatusbarHeight : 0)],
      extrapolate: "clamp"
    });

    const translateXText = this.keyboardHeight.interpolate({
      inputRange: [0, 1],
      outputRange: [WIDTH / 2 - 100, 60],
      extrapolate: "clamp"
    });

    const height = this.keyboardHeight.interpolate({
      inputRange: [0, 1],
      outputRange: [300, OS === "ios" ? 150 : 120],
      extrapolate: "clamp"
    });

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#red" }}>
          <Animated.View style={{ height }}>
            <Animated.View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                height: 200,
                width: 200,
                position: "absolute",
                transform: [{ translateX }, { translateY }, { scale }]
              }}
            >
              <Image
                source={require("../../assets/images/logo.png")}
                style={{ height: null, width: null, flex: 1 }}
                resizeMode="cover"
              />
            </Animated.View>
            <Animated.Text
              style={[
                textStyles.header,
                {
                  position: "absolute",
                  width: 200,
                  textAlign: "center",
                  transform: [
                    { translateX: translateXText },
                    { translateY: translateYText }
                  ]
                }
              ]}
            >
              Login
            </Animated.Text>
          </Animated.View>
          <View style={{ width: WIDTH, flex: 1, padding: 10 }}>
            <TextInput
              label="First Name"
              autoCapitalize="none"
              value=""
              onChange={() => {}}
              returnKeyType="next"
            />
            <TextInput
              label="First Name"
              autoCapitalize="none"
              value=""
              onTouch={() => {}}
              onChange={() => {}}
              returnKeyType="next"
            />
            <Button
              value="Login"
              textStyle={{ color: "#fff" }}
              containerStyle={{ backgroundColor: "#2F2844", marginBottom: 24 }}
              onPress={() => this.props.navigation.navigate("Login")}
            />
          </View>
          <Text style={textStyles.footerText}>VisionarySchoolmen</Text>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}
